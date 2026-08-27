module.exports = {
    '@tags': ['acceptanceDesktopTest','acceptanceMobileTest','stagingDesktopTest','stagingMobileTest'],
	'Car Review page loads': async function (browser) {
		await browser.url(`${browser.launch_url}${browser.globals.solrCarReviewPage}`);
	},
	'Page references are set to nofollow': async function (browser) {
		await browser.assert.elementPresent('a[href*="hpicheck"][rel*="nofollow"]');
		await browser.assert.elementPresent('a[href*="carfinance247"][rel*="nofollow"]');
    },
};
