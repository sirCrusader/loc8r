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
    var locationid = req.params.locationid;
    if (locationid) {
        Loc
            .findById(locationid)
            .select('reviews')
            .exec(function (err, location) {
                if (err) {
                    sendJsonResponse(res, 400, err);
                } else {
                    doAddReview(req, res, location);
                }
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No location in request"
        });
    }
};

var doAddReview = function (req, res, location) {
    if (!location) {
        sendJsonResponse(res, 404, {
            "message": "Location not found"
        });
    } else {
        location.reviews.push({
            author: req.body.author,
            rating: req.body.rating,
            reviewText: req.body.reviewText
        });

        location.save(function (err, location) {
            var thisReview;
            if (err) {
                sendJsonResponse(res, 400, err);
            } else {
                updateAverageRating(location._id);
                thisReview = location.reviews[location.reviews.length - 1];
                sendJsonResponse(res, 201, thisReview);
            }
        });
    }
};

var updateAverageRating = function (locationid) {
    Loc
        .findById(locationid)
        .select('rating reviews')
        .exec(
            function (err, location) {
                if (!err) {
                    doSetAverageRating(location);
                }
            }
        );
};

var doSetAverageRating = function (location) {
    var i, reviewCount, ratingAverage, ratingTotal;
    if (location.reviews && location.reviews.length > 0) {
        reviewCount = location.reviews.length;
        ratingTotal = 0;
        for (i = 0; i < reviewCount; i++) {
            ratingTotal = ratingTotal + location.reviews[i].rating;
        }
        ratingAverage = parseInt(ratingTotal / reviewCount, 10);
        location.rating = ratingAverage;
        location.save(function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Average rating updated to ", ratingAverage);
            }
        });
    }
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