(function GManRenderer() {

    /**
     * @property marked
     * @type {Object}
     */
    var marked = require('marked');

    /**
     * @property renderer
     * @type {marked.Renderer}
     */
    var renderer = new marked.Renderer();

    /**
     * @property colour
     * @type {Object}
     */
    var colour = require('cli-color');

    // Define some common colours for the documentation output.
    var darkGrey  = colour.xterm(8),
        white     = colour.xterm(231),
        lightGrey = colour.xterm(7),
        yellow    = colour.xterm(221),
        header    = colour.xterm(231).bgXterm(161);

    /**
     * @method _send
     * @param text {String}
     * @return {String}
     * @private
     */
    var _send = function _send(text) {
        return '  ' + text;
    };

    /**
     * @method heading
     * @param text {String}
     * @param level {Number}
     * @return {String}
     */
    renderer.heading = function heading(text, level) {

        var methods = {

            /**
             * @method h1
             * @param text {String}
             * @return {String}
             */
            h1: function h1(text) {
                return _send(header(' ' + text + ' ') + darkGrey(' :-'));
            },

            /**
             * @method h2
             * @param text {String}
             * @return {String}
             */
            h2: function h2(text) {
                return _send('\n  ' + colour.bold(text));
            },

            /**
             * @method h3
             * @param text {String}
             * @return {String}
             */
            h3: function h3(text) {
                return _send('\n\n  ' + darkGrey('- ') + yellow(text));
            },

            /**
             * @method h4
             * @param text {String}
             * @return {String}
             */
            h4: function h4(text) {
                return _send(colour.xterm(222)(text));
            }

        };

        return methods['h' + level](text);

    };

    /**
     * @method paragraph
     * @param text {String}
     * @return {String}
     */
    renderer.paragraph = function paragraph(text) {
        return _send('\n' + lightGrey('\n  ' + text + '\n'));
    };

    /**
     * @method em
     * @param text {String}
     * @return {String}
     */
    renderer.em = function em(text) {
        return darkGrey(text);
    };

    /**
     * @method list
     * @param text {String}
     * @return {String}
     */
    renderer.list = function list(text) {
        return _send(text);
    };

    /**
     * @method listitem
     * @param text {String}
     * @returns {String}
     */
    renderer.listitem = function listitem(text) {
        return darkGrey('\n       - ' + white(text));
    };

    /**
     * @method link
     * @param text {String}
     * @return {String}
     */
    renderer.link = function link(text) {
        return colour.underline(text);
    };

    /**
     * @method codespan
     * @param text {String}
     * @return {String}
     */
    renderer.codespan = function codespan(text) {
        return lightGrey(text);
    };

    // Export the renderer for use by G-Man.
    exports.GManRenderer = renderer;

})();