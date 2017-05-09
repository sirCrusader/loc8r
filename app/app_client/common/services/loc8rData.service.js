/**
 * Created by wizard on 5/6/17.
 */

(function () {

    var loc8rData = function ($http) {
        var locationByCoords = function (lat, lng) {
            return $http.get('/api/locations?lng=' + lng + '&lat=' + lat + '&maxDistance=100');
        };
        var locationById = function (locationid) {
            return $http.get('/api/locations/' + locationid);
        };
        return {
            locationByCoords: locationByCoords,
            locationById: locationById
        };
    };
    loc8rData.$inject = ['$http'];

    angular
        .module('loc8rApp')
        .service('loc8rData', loc8rData);
})();
