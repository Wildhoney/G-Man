#!/usr/bin/env node
(function GMan() {

    "use strict";

    /**
     * @property args
     * @type {Object}
     */
    var args = require('minimist')(process.argv.splice(2));

    // Determine if we should be showing the index instead.
    if (args._.length === 0) {

        // Invoke the indexer.
        return require('./Indexer.js');

    }

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
     * @property config
     * @type {Object}
     */
    var config = require('./Configuration.js').GManConfiguration;

    /**
     * @property PrettyError
     * @type {Function}
     */
    var PrettyError = require('pretty-error');

    // Begin to read the documentation file.
    var filePath   = config.directory + '/' + args._[0] + '.md',
        fileExists = fileSystem.existsSync(filePath);

    // Ensure the documentation file exists.
    if (!fileExists) {

        var renderedError = new PrettyError().render(new Error('Documentation file "' + filePath + '" does not exist.'));
        return console.log('\n' + renderedError);

    }

    // Read the Markdown documentation based on the passed argument.
    fileSystem.readFile(filePath, function (error, data) {

        if (error) {

            // Uh-oh! We have an error.
            var renderedError = new PrettyError().render(new Error(error));
            return console.log('\n' + renderedError);

        }

        // Parse the MD document and output it to the CLI.
        console.log('\n' + marked(data.toString(), { renderer: renderer.GManRenderer }));

    });

})();