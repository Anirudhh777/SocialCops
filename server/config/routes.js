var data = require('../controllers/data.js');

 module.exports = function(app) {
    app.post('/data1', function (req,res){
      	data.loadData(req, res)
    })
};