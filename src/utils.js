const InfLoadWatch = class InfLoadWatch {
    constructor(selector) {
        this.feeds = document.querySelectorAll(selector);
    }

    startWatch() {
        this.feeds.forEach((feed) => {
            const observer = new MutationObserver(mutations => this.onFeedMutate(mutations));
            observer.observe(feed, { childList: true, subtree: true });
        });
    }

    onFeedMutate(mutations) {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length > 0) {
                if (mutation.addedNodes[0].className === 'feed' || mutation.addedNodes[0].className === 'feed-list vop'){
                    this.feedAction(mutation.addedNodes[0].querySelectorAll('.feed-item'));
                }
            }
        });
    }

    // eslint-disable-next-line class-methods-use-this, no-unused-vars
    /* abstract */ feedAction(feedItems) {
        throw new TypeError('Must override feedAction()');
    }
};

const getWindow = function getWindow() {
    try {
        return unsafeWindow; // eslint-disable-line
    } catch (error) {
        return window;
    }
};


export { InfLoadWatch, getWindow };
