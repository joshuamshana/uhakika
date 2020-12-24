const {productsComponent} = require("../components/products.component");
const {productListComponent} = require("../components/product-list.component");
const {productAddComponent} = require("../components/product-add.component");
const {appBarComponent} = require("../components/app-bar.component");
const {appLayoutComponent} = require("../components/app-layout.component");
const {adminPageComponent} = require("../components/adminPage.component");

const {bfast} = require("bfastnode");
exports.adminHome = bfast.functions().onGetHttpRequest(
    '/admin',
    (request, response) => {
        response.send(appLayoutComponent(appBarComponent('Uhakika Admin'), adminPageComponent()));
    }
);


exports.adminAddProducts = bfast.functions().onGetHttpRequest(
    '/admin/products',
    (request, response) => {
        response.send(appLayoutComponent(appBarComponent('Uhakika Admin'), productsComponent()));
    }
);

exports.adminAddProductAdd = bfast.functions().onGetHttpRequest(
    '/admin/products/create',
    (request, response) => {
        response.send(appLayoutComponent(appBarComponent('Uhakika Admin'), productAddComponent()));
    }
);
