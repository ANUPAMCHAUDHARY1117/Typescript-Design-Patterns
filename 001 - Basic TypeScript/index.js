"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var config = {
    url: 'https://jsonplaceholder.typicode.com/todos/1',
    method: 'get'
};
axios_1["default"].get(config['url']).then(function (response) {
    console.log(response['data']);
});
