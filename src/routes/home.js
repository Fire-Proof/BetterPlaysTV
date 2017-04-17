import { InfLoadWatch } from '../utils';

const FilterFeed = class FilterFeed extends InfLoadWatch {
    constructor() {
        super('.mod-feed');
        this.filteredReasons = [
            'wip_meta',
            'wip_game',
            'community_spotlight_custom_picks',
            'community_spotlight_editors_picks',
            'community_spotlight_custom_filter',
            'community_spotlight_metatag',
            'community_spotlight_hashtag',
        ];
            // 'replay_by_follow'
            // 'replay_by_me'

        this.initialVideoPlayed = false;

        this.feedAction(document.querySelectorAll('.feed-item'));
    }


    feedAction(feedItems) {
        feedItems.forEach((feedItem) => {
            const feedItemConf = JSON.parse(feedItem.dataset.conf);
            const feedItemReason = feedItemConf.reason;
            const video = feedItem.querySelector('video');
            if (this.filteredReasons.includes(feedItemReason)) {
                // Hack to make sure that the video is stopped before removing it
                video.pause();
                video.src = '';
                video.load();
                feedItem.remove();
            }
        });
        window.scrollY += 1;
    }
};

export default function () {
    const filterFeed = new FilterFeed();
    filterFeed.startWatch();
}
