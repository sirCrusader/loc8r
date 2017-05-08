/**
 * Created by wizard on 5/8/17.
 */

(function () {
    angular
        .module('loc8rApp')
        .directive('navigation', navigation);

    function navigation() {
        return {
            restrict: 'EA',
            templateUrl: '/common/directives/navigation/navigation.template.html'
        };
    }
})();