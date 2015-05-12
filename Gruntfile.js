module.exports = function(grunt) {

    // This is where we configure each task that we'd like to run.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            // This is where we set up all the tasks we'd like grunt to watch for changes.
            scripts: {
                files: ['javascripts/source/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                },
            },
            images: {
                files: ['images/source/**/*.{png,jpg,gif}', 'images/source/*.{png,jpg,gif}'],
                tasks: ['imagemin'],
                options: {
                    spawn: false,
                }
            },
            css: {
                files: ['design/stylesheets/source/*.scss', 'stylesheets/source/*.scss', 'stylesheets/build/**/*.scss'],
                tasks: ['sass', 'autoprefixer'],
                options: {
                    spawn: false,
                }
            }
        },
        uglify: {
            // This is for minifying all of our scripts.
            options: {
                sourceMap: false,
                mangle: false
            },
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'javascripts/source',
                    src: '*.js',
                    dest: 'javascripts/build'
                }]
            }
        },
        imagemin: {
            // This will optimize all of our images for the web.
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/source/',
                    src: ['**/*.{png,jpg,gif}','*.{png,jpg,gif}' ],
                    dest: 'images/build/'
                }]
            }
        },
        sass: {
            // This will compile all of our sass files
            // Additional configuration options can be found at https://github.com/gruntjs/grunt-contrib-sass
            dist: {
                options: {
                  precision: 8,
                  // require: ['susy', 'breakpoint']
                },
                files: [{
                    expand: true,
                    cwd: 'stylesheets/source/',
                    src: ['main.scss', 'critical.scss'],
                    dest: 'stylesheets/build/',
                    ext: '.css'
                }]
            },

            design: {
                options: {
                    precision: 8,
                    // require: ['susy', 'breakpoint']
                },
                files: 
                [{
                    expand: true,
                    cwd: 'design/stylesheets/source/',
                    src: ['main.scss'],
                    dest: 'design/stylesheets/build',
                    ext: '.css'

                }]
            }
        },
        autoprefixer: {
          options: {
          // Task-specific options go here.
            map: true
          },
          prod: {
              // Target-specific file lists and/or options go here.
              src: 'stylesheets/build/main.css',
              dest: 'stylesheets/build/main.css'
          },
        design: {
              // Target-specific file lists and/or options go here.
              src: 'design/stylesheets/build/main.css',
              dest: 'design/stylesheets/build/main.css'
          },
        },
        // browserSync: {
        //     dev: {
        //         bsFiles: {
        //             src : [
        //                 'css/*.css',
        //                 'templates/*.php',
        //                 'images/optimized/*.{png,jpg,gif}',
        //                 'js/build/*.js'
        //             ]
        //         },
        //         options: {
        //             watchTask: true,
        //             injectChanges: false // Change this to "true" if you'd like the css to be injected rather than a browser refresh. In order for this to work with Drupal you will need to install https://drupal.org/project/link_css keep in mind though that this should not be run on a production site.
        //         }
        //     }
        // },

        browserSync: {
                    design: {
                        bsFiles: {
                            src : [
                                'design/stylesheets/build/*.css',
                                'design/*.html'
                            ]
                        },
                        options: {
                            watchTask: true,
                            server: {
                                baseDir: "./design"
                            }
                        }
                    }
                }

    });




    // This is where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-browser-sync');
    // Now that we've loaded the package.json and the node_modules we set the base path
    // for the actual execution of the tasks
    grunt.file.setBase('../')
    // This is where we tell Grunt what to do when we type "grunt" into the terminal.
    // Note. if you'd like to run and of the tasks individually you can do so by typing 'grunt mytaskname' alternatively
    // you can type 'grunt watch' to automatically track your files for changes.
    grunt.registerTask('default', ['build']);
    grunt.registerTask('build', 'Build site.', function() {
      grunt.task.run(['sass', 'autoprefixer', 'imagemin', 'uglify']);
    });

    grunt.registerTask('watcher', 'Watch site for changes.', function() {
      grunt.task.run(['watch']);
    });

    grunt.registerTask('design', 'Design the site', function() {
      grunt.task.run(['browserSync:design', 'watch']);
    });


};
