module.exports = {
    '@tags': ['acceptanceDesktopTest','acceptanceMobileTest','stagingDesktopTest','stagingMobileTest'],
    'Test setup': async function (browser) {
        await browser.url(`${browser.launch_url}`);
    },
    'Top banner elements displayed': async function (browser) {
        await browser.homepage.topBanner();
    },
    'uberTabs elements displayed': async function (browser) {
        await browser.homepage.uberTabs();
    },
    'Search section elements displayed': async function (browser) {
        await browser.homepage.searchSection();
    },
    'Expert Advice section elements displayed': async function (browser) {
        await browser.homepage.expertAdviceSection();
    },
    'Essential Car Buying Tool section elements displayed': async function (browser) {
        await browser.homepage.buyingToolsSection();
    },
    'Latest Car Reviews section elements displayed': async function (browser) {
        await browser.homepage.latestReviews();
    },
    'Browse By Brand section elements displayed': async function (browser) {
        await browser.homepage.browseByBrandSection();
    },
    'Recently Updated Articles section elements displayed': async function (browser) {
        await browser.homepage.recentlyUpdatedArticlesSection();
    },
    'Whats Trending section elements displayed': async function (browser) {
        await browser.homepage.whatsTrendingSection();
    },
    'Footer elements load': async function (browser) {
        await browser.homepage.footer();
    },
};
