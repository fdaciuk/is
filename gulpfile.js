'use strict'

const gulp = require('gulp')
const { spawn } = require('child_process')
const filesToWatch = ['src/**/*.js', 'gulpfile.js']

const exec = (command, cb) => new Promise((resolve, reject) => {
  const [program, ...params] = command.split(' ')
  const cmd = spawn(program, params, { stdio: 'inherit' })
  cmd.on('close', () => {
    resolve()
    if (cb) { cb() }
  })
  cmd.on('error', reject)
})

const handleError = (error) => {
  console.log(error)
  process.exit(1)
}

const test = () => exec('yarn test')
const build = () => exec('yarn build')
const add = () => exec('git add .')
const commit = () => exec('git commit -S -m "Minifying"')
gulp.task('preversion', () => {
  return Promise.resolve()
    .then(test)
    .then(build)
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
