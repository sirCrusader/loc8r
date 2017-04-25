/**
 * Created by wizard on 4/25/17.
 */

var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.reviewsCreate = function (req, res) {

};
module.exports.reviewsReadOne = function (req, res) {
    if (req.params && req.params.locationid && req.params.reviewid) {
        Loc.
            findById(req.params.locationid)
            .select('name reviews')
            .exec(function (err, location) {
                var review, response;
                if (!location) {
                    sendJsonResponse(res, 404, {
                        "message": "Location not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 400, err);
                    return;
                }
                if (location.reviews && location.reviews.length > 0) {
                    review = location.reviews.id(req.params.reviewid);
                    console.log(location.reviews.id(req.params.reviewid));
                    if (!review) {
                        sendJsonResponse(res, 404, {
                            "message": "Review not found",
                        });
                    } else {
                        response = {
                            location: {
                                name: location.name,
                                id: req.params.locationid
                            },
                            review: review,
                        };
                        sendJsonResponse(res, 200, response);
                    }
                } else {
                    sendJsonResponse(res, 404, {
                        "message": "No reviews found",
                    });
                }
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No location in request"
        });
    }
};
module.exports.reviewsUpdateOne = function (req, res) {

};
module.exports.reviewsDeleteOne = function (req, res) {

};