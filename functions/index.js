const {BFast} = require('bfastnode');

exports.home = BFast.functions().onHttpRequest('/',
    (request, response) => {
        response.redirect('/shop');
    }
);

exports.shop = BFast.functions().onHttpRequest('/shop',
    (request, response) => {
        response.send(`
        <div style="display: flex; height: 100vh; justify-content: center; align-items: center">
            <h1>Coming soon...</h1>
        </div>
    `);
    }
);
