/**
 * Created by wizard on 5/3/17.
 */

(function () {
    angular.module('loc8rApp', [
        'ngRoute',
    ]);

    function config ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home/home.view.html',
                controller: 'homeCtrl',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/' })
    }

    angular
        .module('loc8rApp')
        .config(['$routeProvider', config]);
})();
