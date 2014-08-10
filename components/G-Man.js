(function GMan() {

    "use strict";

    /**
     * @property args
     * @type {Object}
     */
    var args = require('minimist')(process.argv.splice(2));

    /**
     * @property fileSystem
     * @type {Object}
     */
    var fileSystem = require('fs');

    /**
     * @property marked
     * @type {Object}
     */
    var marked = require('marked');

    /**
     * @property renderer
     * @type {Object}
     */
    var renderer = require('./Renderer.js');

    /**
     * @property PrettyError
     * @type {Function}
     */
    var PrettyError = require('pretty-error');

    /**
     * @property yaml
     * @type {Object}
     */
    var yaml = require('js-yaml');

    /**
     * @property defaultConfig
     * @type {Object}
     */
    var defaultConfig = {
        directory: 'docs'
    };

    // Parse the YAML document and determine the documentation directory.
    var fileExists    = fileSystem.existsSync('.gman.yml'),
        config        = fileExists ? yaml.safeLoad(fileSystem.readFileSync('.gman.yml', 'utf8')) : defaultConfig;

    // Read the Markdown documentation based on the passed argument.
    fileSystem.readFile(config.directory + '/' + args._[0] + '.md', function (error, data) {

        if (error) {

            // Uh-oh! We have an error.
            var renderedError = new PrettyError().render(new Error(error));
            return console.log('\n' + renderedError);

        }

        // Parse the MD document and output it to the CLI.
        console.log('\n' + marked(data.toString(), { renderer: renderer.GManRenderer }));

    });

})();