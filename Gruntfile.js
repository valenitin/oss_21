module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },

        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "css/styles.css": "less/styles.less"
                }
            }
        },
        watch: {
            styles: {
                 files: ['less/*.less','less/**/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }/*,
        htmllint: {
            all: ['demos/!**!/!*.html', 'tests/!**!/!*.html']
        }*/
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
   /* grunt.loadNpmTasks('grunt-html');*/

    // Default task(s).
    grunt.registerTask('default', ['less','watch']);
};