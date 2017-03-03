'use strict';
import home from './routes/home.js';
import general from './routes/general.js';
import style from '../style/index.scss';
// var $ = require('jquery');

// alert('Test');
const routes = {
    "http://plays.tv/home": home
}


function router(){
    if (window.location.href in routes){
        routes[window.location.href]();
    }
    general();
}

(function () {
    router();
}());

