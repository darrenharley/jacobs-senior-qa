module.exports = {
    '@tags': ['priorityDesktopTest','mobilePriorityTest','stagingDesktopTest','stagingMobileTest'],
	'Car Review page loads': async function (browser) {
        const carReviewPage = await browser.navigateTo(`${browser.launch_url}${browser.globals.solrCarReviewPage}`).getCurrentUrl();
		console.log('Car Review page = ', carReviewPage);
	},
    'Sticky buttons displayed on page': async function (browser) {
        await browser.waitForElementPresent('div.review-sticky-footer', 10000);
    },
    'Nav button displayed on the page': async function (browser) {
        await browser.assert.elementPresent('a.back-to-top-link');
    },
};
