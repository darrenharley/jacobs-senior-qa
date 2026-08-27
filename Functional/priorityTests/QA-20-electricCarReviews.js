module.exports = {
    '@tags': ['priorityDesktopTest','mobilePriorityTest','stagingDesktopTest','stagingMobileTest'],
	'Electric car review page loads': async function (browser) {
		const carElectricReviewPage = await browser.navigateTo(`${browser.launch_url}${browser.globals.solrCarElectricReviewPage}`).getCurrentUrl();
		console.log('Electric car review page = ', carElectricReviewPage);
		await browser.assert.elementPresent('section#reviewDetailsPage');
	},
}
