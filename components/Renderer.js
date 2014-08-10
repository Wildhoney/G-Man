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
        yellow    = colour.xterm(11),
        header    = colour.xterm(231).bgXterm(161);

    renderer.heading = function heading(text, level) {
        return '\n  ' + header(' ' + text + ' ') + darkGrey(' :-');
    };

    renderer.paragraph = function paragraph(text) {
        return lightGrey('\n\n  ' + text) + '\n';
    };

    renderer.list = function list(text) {
        return text;
    };

    renderer.listitem = function listitem(text) {
        return darkGrey('\n\n    - ' + yellow(text));
    };

    renderer.codespan = function codespan(text) {
        return darkGrey('        ' + text);
    };

    renderer.link = function link(text) {
        return colour.underline(text);
    };

    renderer.em = function em(text) {
        return colour.xterm(15).bgXterm(241)(' ' + text + ' ');
    };

    renderer.strong = function strong(text) {
        return colour.bold(text);
    };

    exports.GManRenderer = renderer;

})();