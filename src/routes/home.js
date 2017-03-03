import utils from "../utils.js"

const FilterFeed = class FilterFeed extends utils.InfLoadWatch {
    constructor(){
        super(".mod-feed");
        this.filteredReasons = [
            "wip_meta", 
            "wip_game", 
            "community_spotlight_custom_picks",
            "community_spotlight_editors_picks",
            "community_spotlight_custom_filter",
            "community_spotlight_metatag",
            "community_spotlight_hashtag"
        ];
            // "replay_by_follow"
            // "replay_by_me"
        this.feedAction(document.querySelectorAll(".feed-item"));
    }

    feedAction(feedItems) {
        for (let feedItem of feedItems){
            let feedItemConf = JSON.parse(feedItem.dataset.conf);
            let feedItemReason = feedItemConf["reason"];
            if (this.filteredReasons.includes(feedItemReason)){
                feedItem.remove();
            };
        };
    };
};

export default function(){
    new FilterFeed();
};

// const FilterFeed = class FilterFeed  {
//     constructor(){
//         this.filteredReasons = [
//             "wip_meta", 
//             "wip_game", 
//             "community_spotlight_custom_picks",
//             "community_spotlight_editors_picks",
//             "community_spotlight_custom_filter",
//             "community_spotlight_metatag",
//             "community_spotlight_hashtag"
//         ];
//             // "replay_by_follow"
//             // "replay_by_me"

//         let feed = document.querySelector(".mod-feed");
//         //Filter first feed
//         this.deleteUnwanted(feed.querySelectorAll("li.feed-item"));
//         var observer = new MutationObserver((mutations) => this.onFeedMutate(mutations));
//         observer.observe(feed, {childList: true, subtree: true});
//     }

//     onFeedMutate(mutations) {
//         var self = this;
//         for (let mutation of mutations){
//             if (mutation.addedNodes.length > 0){
//                 if (mutation.addedNodes[0].className === "feed"){
//                     this.deleteUnwanted(mutation.addedNodes[0].querySelectorAll("li.feed-item"));
//                 }
//             }
//         }
//     }

//     deleteUnwanted(feedItems) {
//         for (let feedItem of feedItems){
//             let feedItemConf = JSON.parse(feedItem.dataset.conf);
//             let feedItemReason = feedItemConf["reason"];
//             if (this.filteredReasons.includes(feedItemReason)){
//                 feedItem.remove();
//             };
//         };
//     };
// };
