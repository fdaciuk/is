'use strict'

const gulp = require('gulp')
const { spawn } = require('child_process')
const filesToWatch = ['src/**/*.js', 'gulpfile.js']

const exec = (commandLine, cb) => {
  const command = commandLine.split(' ')
  const program = command[0]
  const params = command.slice(1)
  const cmd = spawn(program, params, { stdio: 'inherit' })
  cmd.on('close', () => cb())
}

const createTaskWithCommand = (command) => (cb) => exec(command, cb)

gulp.task('test', createTaskWithCommand('yarn test'))
gulp.task('build', createTaskWithCommand('yarn build'))
gulp.task('add', createTaskWithCommand('git add .'))
gulp.task('commit', createTaskWithCommand('git commit -S -m "Minifying"'))
gulp.task('preversion', ['test', 'build', 'add', 'commit'])

gulp.task('publish', createTaskWithCommand('npm run pub'))
gulp.task('update', createTaskWithCommand('yarn git:update'))
gulp.task('postversion', ['publish', 'update'])

gulp.task('lint', createTaskWithCommand('yarn lint'))

gulp.task('watch', () => gulp.watch(filesToWatch, ['lint']))

gulp.task('default', ['lint', 'watch'])
