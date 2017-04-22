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
    res.render('locations/location-info', {
        title: "Loc8r - find a place to work with wifi",
        location_name: "Starcups",
        rating: 4,
        address: "125 High Street, Reading, RG6 1PS",
        opening_hours: [{
            days: 'Monday - Friday',
            opening: '7:00am',
            closing: '7:00pm',
            closed: false
        }, {
            days: 'Saturday',
            opening: '8:00am',
            closing: '5:00pm',
            closed: false
        }, {
            days: 'Sunday',
            closed: 'closed'
        }],
        facilities: ['Hot drinks', 'Food', 'Premium wifi'],
        location: 'http://maps.googleapis.com/maps/api/staticmap?center=51.455041,-0.9690884&zoom=17&size=400x350&sensor=false&markers=51.455041,-0.9690884&scale=2',
        reviews: [{
            customer_rating: 4,
            author: 'Vlad Yashchuk',
            time: '16 July 2013',
            text: "What a great place. I can't say enough good things about it.",
        },{
            customer_rating: 3,
            author: 'Charlie Chaplin',
            time: '16 July 2013',
            text: "It was okay. Coffee wasn't great, but the wifi was fast.",
        }]
    });
};

module.exports.addReview = function (req, res) {
    res.render('locations/location-review-form', {
        title: 'Add review',
        location_name: "Starcups",
    });
};