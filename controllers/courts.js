

module.exports = {
    index
}


function index(req, res) {
    res.render('courts/index', {
        title: 'MAIN CONTENT PAGE'
    });
}