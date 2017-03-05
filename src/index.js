import home from './routes/home';
import general from './routes/general';
import '../style/index.scss';
// var $ = require('jquery');

// alert('Test');
const routes = {
    'http://plays.tv/home': home,
};

z { ]
function router() {
    if (window.location.href in routes) {
        routes[window.location.href]();
    }
    general();
}

(function () {
    router();
}());

