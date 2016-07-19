module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    postcss: {
      options: {
        processors: [
          require('autoprefixer')(),
          require('cssnext')(),
          require('precss')()
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
        src: ['gruntDest']
      }
    }
  });
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.registerTask('default', ['postcss']);
}
