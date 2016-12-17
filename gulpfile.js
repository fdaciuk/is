'use strict'

const fs = require('fs')
const { spawn } = require('child_process')
const gulp = require('gulp')
const gutil = require('gulp-util')
const pkg = require('./package.json')

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
const build = () => exec('yarn build')

const createAndApplyBanner = () => new Promise((resolve) => {
  const bannerFile = fs.readFileSync('banner.txt')
  const file = fs.readFileSync('dist/is.min.js')
  const banner = gutil.template(bannerFile, {
    file: isMin,
    filename: 'is.min.js',
    pkg
  })
  const content = `${banner}\n${file}`
  fs.writeFileSync('dist/is.min.js', content)
  resolve()
})

const add = () => exec('git add .')
const commit = () => exec('git commit -S -m "Minifying"')
gulp.task('preversion', () => {
  return Promise.resolve()
    .then(test)
    .then(build)
    .then(createAndApplyBanner)
    .then(add)
    .then(commit)
    .catch(handleError)
})


const publish = () => exec('npm run pub')
const update = () => exec('yarn git:update')
gulp.task('postversion', () => {
  return Promise.resolve()
    .then(publish)
    .then(update)
    .catch(handleError)
})

gulp.task('lint', (cb) => exec('yarn lint').then(cb))
gulp.task('watch', () => gulp.watch(filesToWatch, ['lint']))
gulp.task('default', ['lint', 'watch'])
