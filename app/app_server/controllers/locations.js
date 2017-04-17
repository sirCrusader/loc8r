/**
 * Created by wizard on 4/13/17.
 */

module.exports.homeList = function (req, res) {
    res.render('locations/locations-list', {
        title: "Loc8r - find a place to work with wifi",
        pageHeader: {
            title: "Loc8r",
            strapline: "Find places to work with wifi near you!"
        },
        locations: [{
            name: "Starcups",
            address: "125 High Street, Reading, RG6 1PS",
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m'
        },{
            name: "Cafe Hero",
            address: "125 High Street, Reading, RG6 1PS",
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '200m'
        },{
            name: "Burger Queen",
            address: "125 High Street, Reading, RG6 1PS",
            rating: 2,
            facilities: ['Food', 'Premium wifi'],
            distance: '250m'
        }]
    });
};

module.exports.locationInfo = function (req, res) {
    res.render('locations/location-info');
};

module.exports.addReview = function (req, res) {
    res.render('locations/location-review-form', { title: 'Add review' });
};