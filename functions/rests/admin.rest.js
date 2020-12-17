const {bfast} = require("bfastnode");
exports.adminHome = bfast.functions().onGetHttpRequest(
    '/admin',
    (request, response) => {
        response.send('admin page')
    }
);
