var exec = require('cordova/exec');

function plugin() {

}

plugin.prototype.new_activity = function(data) {
    exec(function(res){}, function(err){}, "IALPlugin", "new_activity", [ { "data": data}]);
}

module.exports = new plugin();