module.exports=function (grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                options: {
                    compress: false,
                    optimization: 2,
                    sourceMap: true,
                    sourceMapFilename: "src/css/style.css.map",
                    sourceMapBasepath: "src/css/"
                },
                files: {
                    "src/css/style.css": "src/less/style.less"
                }
            }
        },

        watch: {
            styles: {
                files: ['src/less/*.less','src/less/**/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            },

            js:{
                files: ['src/js/*.js'],
                options: {
                    nospawn: true
                }
            },
            html:{
                files: ['src/*.html','src/*.phtml'],
                tasks: [],
                options: {
                    nospawn: true
                }
            },
        },

        concat: {
            js: {
                src: 'src/js/*.js',
                dest: 'src/js/main.js',
            },
            css: {
                src: 'src/css/*.css',
                dest: 'src/css/style.css'
            },
        },

        uglify : {
            my_target : {
                files : {
                    'dist/js/main.min.js' : [ 'src/js/main.js']
                }
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 2 versions'],
            },
            your_target: {
                src: 'src/css/style.css',
                dest: 'src/css/style.css'
            },
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/css',
                    src: ['style.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.min.css'

                }]
            }
        },
        clean: {
            build: {
                expand: true,
                src: 'dist'
            }
        },
        });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default',['watch']);
    grunt.registerTask('build',['clean','less','concat','autoprefixer','cssmin','uglify']);
};

