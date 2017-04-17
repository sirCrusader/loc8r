/**
 * Created by wizard on 4/13/17.
 */

module.exports.about = function (req, res) {
    res.render('other/generic-text', { title: 'About' });
};