/**
 * Created by wizard on 5/3/17.
 */

(function () {
    angular.module('loc8rApp', [
        'ngRoute', 'ngSanitize'
    ]);

    function config ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home/home.view.html',
                controller: 'homeCtrl',
                controllerAs: 'vm'
            })
            .when('/about', {
                templateUrl: '/common/views/genericText.view.html',
                controller: 'aboutCtrl',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/' });

        $locationProvider.html5Mode(true);
    }

    angular
        .module('loc8rApp')
        .config(['$routeProvider', '$locationProvider', config]);
})();
