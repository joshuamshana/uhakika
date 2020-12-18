/**
 * process product item ui
 * @param products {{
 *     name: string,
 *     image: string,
 *     price: number,
 *     detail: string,
 *     id string
 * }[]}
 * @return {string}
 */
exports.productListComponent = function (products){
    let ui = '';
    for (const product of products){
        ui += `
        <div class="shadow" style="display: flex; flex-direction: row; flex-wrap: nowrap; margin: 8px 0;">
             <div style="width: 400px">
                <img alt="${product.name}" src="${product.image}" style="width: 100%">
             </div>
             
             <div style="flex-grow: 1; display: flex; flex-direction: column; padding: 16px">
                <h1>${product.name}</h1>
                <h3>${product.price}</h3>
                <p>${product.detail}</p>
                <button class="btn btn-block btn-primary">Nunua</button>
             </div>
        </div>
    `
    }

    return ui;
}
