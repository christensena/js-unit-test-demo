module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    qunit: {
      all: {
        options: {
          urls: [
            'http://localhost:8000/qunit/hello-world-test.html',
            'http://localhost:8000/qunit/multiplier-fixture.html']
        }
          ]
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: '.'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-qunit');

  // A convenient task alias.
  grunt.registerTask('test', ['connect', 'qunit']);
};