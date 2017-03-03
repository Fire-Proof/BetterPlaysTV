import utils from '../utils';

const DisableAutoReplay = class DisableAutoReplay extends utils.InfLoadWatch {
    constructor() {
        super('.mod-vop-feed, .mod-feed');

        this.feedAction(document.querySelectorAll('.mod-vop-feed, .feed-item'));
    }

    feedAction(feedItems) {
        for (const feedItem of feedItems) {
            const videos = feedItem.querySelectorAll('.ui-player video')
            for (const video of videos) {
                video.loop = false;
            }
        }
    }
};

const disableSocialHovers = function disableSocialHovers() {
    require('../../style/disableSocialHovers.scss');
};

const expandedView = function expandedView() {
    require('../../style/expandedView.scss');
};

export default function () {
    new DisableAutoReplay();
    disableSocialHovers();
    expandedView();
}
