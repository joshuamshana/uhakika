const {productListComponent} = require("./components/product-list.component");
const {appBarComponent} = require("./components/app-bar.component");
const {appLayoutComponent} = require("./components/app-layout.component");
const {BFast, bfast} = require('bfastnode');

exports.home = BFast.functions().onHttpRequest('/',
    (request, response) => {
        response.redirect('/shop');
    }
);

exports.shop = BFast.functions().onHttpRequest('/shop',
    (request, response) => {
        bfast.database().table('products')
            .query()
            .orderBy('_created_at', -1)
            .size(1000000000)
            .find().then(value => {
                response.send(
                    appLayoutComponent(
                        appBarComponent('Uhakika App'),
                        productListComponent(value)
                    )
                );
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
