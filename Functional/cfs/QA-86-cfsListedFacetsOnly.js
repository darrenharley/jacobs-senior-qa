module.exports = {
    '@tags': ['acceptanceDesktopTest','acceptanceMobileTest','stagingDesktopTest','stagingMobileTest'],
	'Used cars for sale page loads': async function (browser) {
		await browser.url(`${browser.launch_url}${browser.globals.carsForSale}used`);
	},
	'Location displayed': async function (browser) {
		await browser.waitForElementPresent('div#filter-summary', 5000);
		await browser.assert.elementPresent('div.search-filters__location');
	},
	'Car Details displayed': async function (browser) {
	 	await browser.assert.elementPresent('div.search-filters__section .icon-24x24-car-details');
	},
	'Budget displayed': async function (browser) {
	 	await browser.assert.elementPresent('div.search-filters__section .icon-24x24-budget');
		await browser.assert.elementPresent('div.search-filters__prices');
	},
	'Car Specifications displayed': async function (browser) {
	 	await browser.assert.elementPresent('div.search-filters__section .icon-24x24-specs');
	},
	'Practicality facet links are displayed': async function (browser) {
	 	await browser.assert.elementPresent('div.search-filters__section .icon-24x24-practicality');
	},
};
