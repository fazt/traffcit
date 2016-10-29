import eslint from 'gulp-eslint';
import gulp from 'gulp';
import livereload from 'gulp-livereload';
import nodemon from 'gulp-nodemon';
import notify from 'gulp-notify';
import less from 'gulp-less';

import path from 'path';

gulp.task('less',()=>{
  return gulp.src('./dev/design/css/*.less')
    .pipe(less({
      paths: [path.join(__dirname,'dev/design/css','includes')]
    }))
    .pipe(gulp.dest('./src/public/css'));
});

gulp.task('eslint',()=>{
  return gulp.src([
    'src/**/*.js',
    '!src/public/bower_componentes/**/*.js'
  ])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('livereload',()=>{
  livereload({ start: true});
});

gulp.task('start-dev',()=>{
  livereload.listen();

  gulp.watch('./dev/design/css/**/*.less',['less']);

  nodemon({
    script:'src/server.js',
    ext:'js',
    env: {
      'NODE_ENV':'development'
    }
  }).on('restart',()=>{
    gulp.src('src/server.js')
      .pipe(livereload())
      .pipe(notify('Reloading page,please wait...'));
  });
});

gulp.task('start',()=>{
  nodemon({
    script:'src/server.js',
    ext:'js',
    env: {
      'NODE_ENV':'production'
    }
  });
});

gulp.task('default',['livereload','start-dev']);
