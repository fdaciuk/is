'use strict'

const gulp = require('gulp')
const { spawn } = require('child_process')

gulp.task('lint', (cb) => {
  const lint = spawn('yarn', ['lint'], { stdio: 'inherit' })
  lint.on('close', () => cb())
})

gulp.task('default', ['lint'], () => {
  gulp.watch('src/**/*.js', ['lint'])
})
