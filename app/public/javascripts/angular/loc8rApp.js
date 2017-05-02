/**
 * Created by wizard on 5/2/17.
 */

var locationListCtrl = function ($scope) {
    $scope.data = {
        locations: [{
            name: 'Burget Queen',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '0.296456',
            _id: '5370a35f2536f6785f8dfb6a'
        },{
            name: 'Costy',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 5,
            facilities: ['Hot drinks', 'Food', 'Alcoholic drinks'],
            distance: '0.796456',
            _id: '5370a35f2536f6785f8dfb6a'
        }]
    };
};

angular
    .module('loc8rApp', [])
    .controller('locationListCtrl', locationListCtrl);