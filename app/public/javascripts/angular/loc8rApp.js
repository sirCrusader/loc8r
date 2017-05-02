/**
 * Created by wizard on 5/2/17.
 */
var _isNumeric = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

var formatDistance = function() {
    return function (distance) {
        var numDistance, unit;
        if (distance && _isNumeric(distance)) {
            if (distance > 1) {
                numDistance = parseFloat(distance).toFixed(1);
                unit = 'km';
            } else {
                numDistance = parseInt(distance * 1000,10);
                unit = 'm';
            }
            return numDistance + unit;
        } else {
            return "?";
        }
    }
};

var ratingStars = function() {
    return {
        scope: {
            thisRating: '=rating'
        },
        templateUrl: '/angular/rating-stars.html'
    };
};

var locationListCtrl = function ($scope, loc8rData) {
    $scope.message = "Searching for nearbly places";
    loc8rData
        .then(function onSuccess(response) {
            $scope.message = response.data.length > 0 ? "" : "No locations found.";
            $scope.data = { locations: response.data };
        })
        .catch(function onError(response) {
            $scope.message = "Sorry, something's gone wrong.";
    });
};

var loc8rData = function ($http) {
    return $http.get('/api/locations?lng=-0.9630881&lat=51.451045&maxDistance=0.5');
};

angular
    .module('loc8rApp', [])
    .controller('locationListCtrl', locationListCtrl)
    .filter('formatDistance', formatDistance)
    .directive('ratingStars', ratingStars)
    .service('loc8rData', loc8rData);