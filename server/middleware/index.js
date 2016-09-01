module.exports = {
    keepRetpath: function(req, res, next) {
        req.session.retpath = '/?doc=' + req.query.doc;
        return next();
    },
    ensureAuthenticated: function(req, res, next) {
        if (req.isAuthenticated()) return next();

        return res.send('You need to logIn');
    }
};
