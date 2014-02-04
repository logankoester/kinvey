/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    bower: grunt.file.readJSON('bower.json'),
    curl: {

      // Backbone
      'kinvey-backbone.js': 'http://download.kinvey.com/js/kinvey-backbone-<%= bower.version %>.js',
      'kinvey-backbone.min.js': 'http://download.kinvey.com/js/kinvey-backbone-<%= bower.version %>.min.js',
      
      // HTML5
      'kinvey-html5.js': 'http://download.kinvey.com/js/kinvey-html5-<%= bower.version %>.js',
      'kinvey-html5.min.js': 'http://download.kinvey.com/js/kinvey-html5-<%= bower.version %>.min.js',

      // Phonegap
      'kinvey-phonegap.js': 'http://download.kinvey.com/js/kinvey-phonegap-<%= bower.version %>.js',
      'kinvey-phonegap.min.js': 'http://download.kinvey.com/js/kinvey-phonegap-<%= bower.version %>.min.js',

      // Titanium
      'kinvey-titanium.js': 'http://download.kinvey.com/js/kinvey-titanium-<%= bower.version %>.js',
      'kinvey-titanium.min.js': 'http://download.kinvey.com/js/kinvey-titanium-<%= bower.version %>.min.js'
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-curl');
};
