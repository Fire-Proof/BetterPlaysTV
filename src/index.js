import home from './routes/home';
import general from './routes/general';
import { setValue } from './store';
import '../style/index.scss';
// var $ = require('jquery');

// alert('Test');
const routes = {
    'http://plays.tv/home': home,
};

function router() {
    if (window.location.href in routes) {
        routes[window.location.href]();
    }
    general();
}

(function () {
    setValue('test', false);

    router();
}());

