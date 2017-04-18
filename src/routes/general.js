import { InfLoadWatch } from '../utils';
import store from '../store';

const DisableAutoReplay = class DisableAutoReplay extends InfLoadWatch {
    constructor() {
        super('.mod-vop-feed, .mod-feed');

        this.feedAction(document.querySelectorAll('.mod-vop-feed, .feed-item'));
    }

    // eslint-disable-next-line class-methods-use-this
    feedAction(feedItems) {
        feedItems.forEach((feedItem) => {
            const videos = feedItem.querySelectorAll('.ui-player video');
            videos.forEach((video) => {
                video.loop = false; // eslint-disable-line no-param-reassign
            });
        });
    }
};

const DisableIntro = class DisableIntro extends InfLoadWatch {
    constructor() {
        super('.mod-vop-feed, .mod-feed');

        this.feedAction(document.querySelectorAll('.mod-vop-feed, .feed-item'));
    }

    // eslint-disable-next-line class-methods-use-this
    feedAction(feedItems) {
        feedItems.forEach((feedItem) => {
            const videos = feedItem.querySelectorAll('.ui-player video');
            videos.forEach((video) => {
                delete video.dataset.intro;
            });
        });
    }
};


const disableSocialHovers = function disableSocialHovers() {
    require('../../style/disableSocialHovers.scss'); // eslint-disable-line global-require
};

const expandedView = function expandedView() {
    require('../../style/expandedView.scss'); // eslint-disable-line global-require
};

export default function () {
    if (store.getValue('setting-disableAutoReplay-enable')) {
        new DisableAutoReplay().startWatch();
    }
    if (store.getValue('setting-DisableIntro-enable')) {
        new DisableIntro().startWatch();
    }
    if (store.getValue('setting-disableSocialHovers-enable')) {
        disableSocialHovers();
    }
    if (store.getValue('setting-expandedView-enable')) {
        expandedView();
    }
}
