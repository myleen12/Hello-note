const path = require('path');
 
module.exports = function(app) {

    app.get('/note', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/assests/notes.html"));
    });
        app.get('*', function(req, res) {
            res.sendFile(path.join(__dirname, "../pulblic/assests/index.html"));
    
    });
}