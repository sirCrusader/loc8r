/**
 * Created by wizard on 4/13/17.
 */

module.exports.homeList = function (req, res) {
    res.render('locations-list');
};

module.exports.locationInfo = function (req, res) {
    res.render('location-info');
};

module.exports.addReview = function (req, res) {
    res.render('location-review-form', { title: 'Add review' });
};