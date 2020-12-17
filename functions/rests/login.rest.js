const {bfast} = require("bfastnode");
exports.loginRest = bfast.functions().onGetHttpRequest(
    '/admin/login',
    (request, response) => {
        response.send('login page');
    }
);
