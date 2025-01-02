
const Courses = require('../models/Course');
class SiteController {

    // [GET] /homne
    index(req, res) {

        Courses.find({}).then((courses) => res.json(courses))
            .catch((err) => res.status(400).json({ error: 'error!!' }))
    }

    // index(req, res) {
    //     res.render('home');
    // }

    // [GET] /search
    search(req, res) {
        res.render('Search');
    }
}


module.exports = new SiteController;