module.exports = function (grunt) {

    grunt.initConfig({
        // Import package manifest
        pkg: grunt.file.readJSON("package.json"),
        // Banner definitions
        meta: {
            banner: "/*\n" +
                    " *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
                    " *  <%= pkg.description %>\n" +
                    " *  <%= pkg.homepage %>\n" +
                    " *\n" +
                    " *  Made by <%= pkg.author.name %>\n" +
                    " *  Under <%= pkg.license %> License\n" +
                    " */\n"
        },
        // Concat definitions
        concat: {
            options: {
                banner: "<%= meta.banner %>"
            },
            dist: {
                src: ["src/jquery.columnify.js"],
                dest: "dist/jquery.columnify.js"
            }
        },
        // Minify definitions
        uglify: {
            dist: {
                src: ["dist/jquery.columnify.js"],
                dest: "dist/jquery.columnify.min.js"
            },
            options: {
                banner: "<%= meta.banner %>"
            }
        },
        // CoffeeScript compilation
        coffee: {
            compile: {
                files: {
                    "dist/jquery.columnify.js": "src/jquery.columnify.coffee"
                }
            }
        },
        // karma test runner
        karma: {
            unit: {
                configFile: "karma.conf.js",
                background: true,
                singleRun: false,
                browsers: ["PhantomJS", "Firefox"]
            },
            //continuous integration mode: run tests once in PhantomJS browser.
            travis: {
                configFile: "karma.conf.js",
                singleRun: true,
                browsers: ["PhantomJS"]
            }
        },
        // watch for changes to source
        // Better than calling grunt a million times
        // (call 'grunt watch')
        watch: {
            files: ["src/*", "test/**/*"],
            tasks: ["default"]
        }

    });

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-coffee");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-karma");

    grunt.registerTask("travis", ["karma:travis"]);
    grunt.registerTask("build", ["concat", "uglify"]);
    grunt.registerTask("default", ["build", "karma:unit:run"]);
};
