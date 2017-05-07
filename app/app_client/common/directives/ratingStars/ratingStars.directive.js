/**
 * Created by wizard on 5/7/17.
 */

var ratingStars = function() {
    return {
        restrict: 'EA',
        scope: {
            thisRating: '=rating'
        },
        templateUrl: '/common/directives/ratingStars/rating-stars.template.html'
    };
};

angular
    .module('loc8rApp')
    .directive('ratingStars', ratingStars);