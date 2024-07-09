
class NewsController {

    // [GET] / news
    index(req, res) {
        res.render('News');
    }

    // [GET] /news/:slug
    show(req, res) {
        res.render('Ok');
    }
}


module.exports = new NewsController;