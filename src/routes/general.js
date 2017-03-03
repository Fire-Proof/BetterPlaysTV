import utils from "../utils.js"

const DisableAutoReplay = class DisableAutoReplay extends utils.InfLoadWatch {
    constructor(){
        super(".mod-vop-feed, .mod-feed")

        this.feedAction(document.querySelectorAll(".mod-vop-feed, .feed-item"));
    }

    feedAction(feedItems) {
        console.log(feedItems)
        for (let feedItem of feedItems){
            let videos = feedItem.querySelectorAll(".ui-player video")
            console.log(videos)
            for (let video of videos){
                video.loop = false;
            }
        }
    };

};

const disableSocialHovers = function disableSocialHovers() {
    require("../../style/disableSocialHovers.scss");
};

const expandedView = function expandedView(){
    require("../../style/expandedView.scss");
}


export default function(){
    new DisableAutoReplay();
    disableSocialHovers();
    expandedView();
};