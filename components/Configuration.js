(function GManIndexer() {

    "use strict";

    /**
     * @property fileSystem
     * @type {Object}
     */
    var fileSystem = require('fs');

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

    // Parse the YAML document.
    var fileExists = fileSystem.existsSync('.gman.yml');

    // Export the configuration.
    exports.GManConfiguration = fileExists ? yaml.safeLoad(fileSystem.readFileSync('.gman.yml', 'utf8')) : defaultConfig;

})();