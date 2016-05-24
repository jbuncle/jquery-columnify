module.exports = function (config) {

    config.set({
        files: [
            "node_modules/jquery/dist/jquery.js",
            "dist/jquery.columnify.min.js",
            "test/spec/*"
        ],
        frameworks: ["qunit"],
        autoWatch: true
    });
};