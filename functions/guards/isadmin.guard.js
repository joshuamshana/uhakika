const {bfast} = require("bfastnode");
exports.isAdminGuard = bfast.functions().onHttpRequest(
    '/admin',
    (request, response, next) => {
       // response.redirect('/admin/login');
        next();
    }
);
