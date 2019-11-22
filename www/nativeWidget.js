var exec = require('cordova/exec');

exports.toast = function (arg0, success, error) {
    exec(success, error, 'nativeWidget', 'toast', [arg0]);
};
