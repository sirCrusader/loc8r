/**
 * Created by wizard on 5/6/17.
 */

angular
    .module('loc8rApp')
    .service('loc8rData', loc8rData);

var loc8rData = function ($http) {
    var locationByCoords = function (lat, lng) {
        return $http.get('/api/locations?lng=' + lng + '&lat=' + lat + '&maxDistance=1');
    };
    return {
        locationByCoords: locationByCoords
    };
};