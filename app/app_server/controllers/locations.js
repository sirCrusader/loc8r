/**
 * Created by wizard on 4/13/17.
 */

module.exports.homeList = function (req, res) {
    res.render('locations/locations-list');
};

module.exports.locationInfo = function (req, res) {
    res.render('locations/location-info');
};

module.exports.addReview = function (req, res) {
    res.render('locations/location-review-form', { title: 'Add review' });
};