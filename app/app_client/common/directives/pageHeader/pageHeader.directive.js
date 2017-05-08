/**
 * Created by wizard on 5/8/17.
 */

(function () {

    angular
        .module('loc8rApp')
        .directive('pageHeader', pageHeader);

    function pageHeader() {
        return {
            restrict: 'EA',
            scope: {
                content: '=content',
            },
            templateUrl: '/common/directives/pageHeader/pageHeader.template.html'
        }
    };
})();