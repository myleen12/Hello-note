const path = require('path');

module.exports = function(app) {
    
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/assests/index.html'));
    });

    app.get('./note', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/assests/note.html'));
    });
}