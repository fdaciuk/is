'use strict'

const fs = require('fs')
const { spawn } = require('child_process')
const gulp = require('gulp')
const gutil = require('gulp-util')

const filesToWatch = ['src/**/*.js', 'gulpfile.js']

const exec = (command) => new Promise((resolve, reject) => {
  const [program, ...params] = command.split(' ')
  const cmd = spawn(program, params, { stdio: 'inherit' })
  cmd.on('close', resolve)
  cmd.on('error', reject)
})

const handleError = (error) => {
  throw new Error(error)
}

const test = () => exec('yarn test')
const fixLint = () => exec('yarn lint:fix')
const build = () => exec('yarn build')
const add = () => exec('git add .')
const commit = () => exec('git commit -S -m "Minifying"')
gulp.task('preversion', () => {
  return Promise.resolve()
    .then(test)
    .then(fixLint)
    .then(build)
    .then(add)
    .then(commit)
    .catch(handleError)
})

const createAndApplyBanner = () => new Promise((resolve) => {
  const pkg = require('./package.json')
  const filePath = 'dist/is.min.js'
  const bannerFile = fs.readFileSync('banner.txt')
  const file = fs.readFileSync(filePath)
  const filename = 'is.min.js'
  const banner = gutil.template(bannerFile, { pkg, file, filename })
  const content = banner + file

  fs.writeFile(filePath, content, () => resolve())
})

const commitBanner = () => exec('git commit -S -m "Update banner"')
const publish = () => exec('npm run pub')
const update = () => exec('yarn git:update')
gulp.task('postversion', () => {
  return Promise.resolve()
    .then(createAndApplyBanner)
    .then(add)
    // .then(commitBanner)
    // .then(publish)
    // .then(update)
    // .catch(handleError)
})

gulp.task('lint', (cb) => exec('yarn lint').then(cb))
gulp.task('watch', () => gulp.watch(filesToWatch, ['lint']))
gulp.task('default', ['lint', 'watch'])
