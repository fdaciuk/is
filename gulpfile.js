'use strict'

const gulp = require('gulp')
const { spawn } = require('child_process')
const filesToWatch = ['src/**/*.js', 'gulpfile.js']

const exec = (command) => new Promise((resolve, reject) => {
  const [program, ...params] = command.split(' ')
  const cmd = spawn(program, params, { stdio: 'inherit' })
  cmd.on('close', () => resolve())
})

const test = () => exec('yarn test')
const build = () => exec('yarn build')
const add = () => exec('git add .')
const commit = () => exec('git commit -S -m "Minifying"')
gulp.task('preversion', (cb) => {
  exec(test).then(build).then(add).then(commit).then(cb)
})

const publish = () => exec('npm run pub')
const update = () => exec('yarn git:update')
gulp.task('postversion', (cb) => {
  exec(publish).then(update).then(cb)
})

gulp.task('lint', (cb) => exec('yarn lint').then(cb))
gulp.task('watch', () => gulp.watch(filesToWatch, ['lint']))
gulp.task('default', ['lint', 'watch'])
