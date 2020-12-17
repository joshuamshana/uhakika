const {BFast, bfast} = require('bfastnode');

exports.home = BFast.functions().onHttpRequest('/',
    (request, response) => {
        response.redirect('/shop');
    }
);

exports.shop = BFast.functions().onHttpRequest('/shop',
    (request, response) => {
        bfast.database().table('products')
            .getAll().then(value => {
            response.send(`
                    <div style="display: flex; height: 100vh; justify-content: center; align-items: center; flex-direction: column">
                        <h1>Coming soon...</h1>
                        <p>${JSON.stringify(value)}</p>
                    </div>
            `);
        }).catch(reason => {
            response.send(reason)
        })
    }
);


bfast.init({
    applicationId: 'uhakika',
    projectId: 'uhakika',
    appPassword: 'uhakika2020'
})
