/**
 * Created by wizard on 5/9/17.
 */

(function () {
    angular
        .module('loc8rApp')
        .filter('addHtmlLineBreaks', addHtmlLineBreaks);

    function addHtmlLineBreaks() {
        return function (text) {
            var output = text.replace(/\n/g, '<br/>');
            return output;
        };
    }
})();