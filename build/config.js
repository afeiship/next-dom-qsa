(function () {

  'use strict';

  const rootPath = process.cwd();
  const gulp = require('gulp');


  module.exports = {
    path: {
      root: rootPath,
      src: rootPath + '/src',
      dist: rootPath + '/dist',
      gulp: rootPath + '/gulp'
    },
    sassOptions: {
      normal: {
        outputStyle: 'expanded' /* nested | expanded | compact | compressed */
      },
      minify: {
        outputStyle: 'compressed'
      }
    }
  };

}());
