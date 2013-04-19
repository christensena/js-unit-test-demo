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
      }
    },

    mocha: {
      all: {
        options: {
          run: true,
          urls: [
            'http://localhost:8000/mocha/row-manager.spec-fixture.html'
          ]
        }
      }
    },

    // connect for a simple static web server
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
  grunt.loadNpmTasks('grunt-mocha');

  // tasks
  grunt.registerTask('test', ['connect', 'qunit', 'mocha']);
  grunt.registerTask('default', ['test']);
};