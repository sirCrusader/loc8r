/**
 * Created by wizard on 5/3/17.
 */

angular.module('loc8rApp', [
    'ngRoute',
]);

function config ($routeProvider) {
    $routeProvider
        .when('/', {

        })
        .otherwise({ redirectTo: '/' })
}

angular
    .module('loc8rApp')
    .config(['$routeProvider', config]);