var fs = require('fs');
var $ = jQuery = require('jquery');

module.exports = (function() {
return {
		loadData: function(req, res) {
			fs.readFile("data/sachin.txt","utf8", function (error, data) {
	        result = $.csv.toObjects(data);
			res.json(result);
			});
		}
 	 }
})();