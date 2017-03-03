const InfLoadWatch = class InfLoadWatch {
    constructor(selector){
        let feeds = document.querySelectorAll(selector);
        for (let feed of feeds){
            var observer = new MutationObserver((mutations) => this.onFeedMutate(mutations));
            observer.observe(feed, {childList: true, subtree: true});
        }
    }

    onFeedMutate(mutations) {
        for (let mutation of mutations){
            console.log(mutation)
            if (mutation.addedNodes.length > 0){
                if (mutation.addedNodes[0].className === "feed" || mutation.addedNodes[0].className === "feed-list vop"){
                    this.feedAction(mutation.addedNodes[0].querySelectorAll(".feed-item"));
                }
            }
        }
    }

    feedAction(feedItems) {
        throw new TypeError("Must override feedAction()");
    };
};

export default {
    InfLoadWatch
}

