import home from './routes/home';
import general from './routes/general';
import store from './store';
import initSettingsMenu from './settings';
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
    initSettingsMenu();
}

function initStorage() {
    store.setValue('setting-disableSocialHovers-enable', true);
    store.setValue('setting-expandedView-enable', true);
    store.setValue('setting-DisableIntro-enable', true);
    store.setValue('setting-DisableAutoReplay-enable', true);
    store.setValue('setting-filterFeed-enable', true);
    store.setValue('init', true);
}

(function () {
    if (store.getValue('init') === null) {
        initStorage();
    }
    router();
}());

