import { InfLoadWatch } from '../utils';

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

const disableSocialHovers = function disableSocialHovers() {
    require('../../style/disableSocialHovers.scss'); // eslint-disable-line global-require
};

const expandedView = function expandedView() {
    require('../../style/expandedView.scss'); // eslint-disable-line global-require
};

export default function () {
    const disableAutoReplay = new DisableAutoReplay();
    disableAutoReplay.startWatch();
    disableSocialHovers();
    expandedView();
}
