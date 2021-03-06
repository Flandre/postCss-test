module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    postcss: {
      options: {
        processors: [
          require('postcss-will-change')(),
          require('autoprefixer')({
            browsers: ['last 2 version']
          }),
          require('postcss-color-rgba-fallback')(),
          require('postcss-opacity')(),
          require('postcss-pseudoelements')(),
          require('postcss-vmin')(),
          require('pixrem')(),

          require('postcss-import')(),
          require('css-mqpacker')(),
          require('cssnano')(),

          require('precss'),

          require('postcss-nested-props')
        ]
      },
      dist: {
        expand: true,
        cwd: 'src/',
        src: ['**/*.css'],
        dest: 'gruntDest/',
        ext: '.css'
      }
    },
    clean: {
      build: {
        src: ['gruntDest/*']
      }
    }
  });
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.registerTask('default', ['clean', 'postcss']);
};
