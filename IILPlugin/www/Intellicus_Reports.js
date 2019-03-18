var exec = require('cordova/exec');

function Intellicus_Reports()
{
    this.coolMethod = function (arg0, success, error) {
        exec(success, error, 'Intellicus_Reports', 'coolMethod', [arg0]);
    };
    
    this.openReport = function (arg0, success, error) {
        exec(success, error, 'Intellicus_Reports', 'openReport', [{ "data": arg0}]);
    };
};

module.exports = new Intellicus_Reports();
