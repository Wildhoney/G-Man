(function GManIndexer() {

    "use strict";

    /**
     * @property config
     * @type {Object}
     */
    var config = require('./Configuration.js').GManConfiguration;

    /**
     * @property glob
     * @type {Object}
     */
    var glob = require('glob');

    /**
     * @property colour
     * @type {Object}
     */
    var colour = require('cli-color');

    /**
     * @property path
     * @type {Object}
     */
    var path = require('path');

    // Define some common colours for the documentation output.
    var darkGrey  = colour.xterm(8),
        white     = colour.xterm(231),
        lightGrey = colour.xterm(7),
        yellow    = colour.xterm(221),
        header    = colour.xterm(231).bgXterm(161);

    // Output the header.
    process.stdout.write('\n  ' + header(' G-Man Documentation '));
    process.stdout.write(darkGrey(' :-'));
    process.stdout.write('\n\n');
    process.stdout.write(colour.bold('  Index\n\n'));

    // Iterate over each of the documentation files discovered.
    glob(config.directory + '/*.md', function then(error, files) {

        files.forEach(function forEach(file) {

            process.stdout.write('  ' + darkGrey('- ') + yellow(file) + '\n');
            process.stdout.write('    ' + lightGrey('gman ' + path.basename(file, '.md')) + '\n\n')

        });

    })

})();