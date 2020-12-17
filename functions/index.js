const {BFast} = require('bfastnode');

exports.helloWorld = BFast.functions().onHttpRequest('/',
    (request, response) => {
        response.send(`
        <div style="display: flex; height: 100vh">
            <h1>Coming soon...</h1>
        </div>
    `);
    }
);
