module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    postcss: {
      options: {
        processors: [
          require('postcss-will-change')(),
          require('autoprefixer')(),
          require('postcss-color-rgba-fallback')(),
          require('postcss-opacity')(),
          require('postcss-pseudoelements')(),
          require('postcss-vmin')(),
          require('pixrem')()
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
  grunt.registerTask('default', ['postcss']);
};
