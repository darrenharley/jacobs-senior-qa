var assert = require('assert');
var needle = require('needle');
var testValuationUrl;

module.exports = {
    '@tags': ['priorityDesktopTest','mobilePriorityTest','stagingDesktopTest','stagingMobileTest'],
	'CarValuationsLanding page template loads': async function (browser) {
		const landingPageUrl = (`${browser.launch_url}/car-valuation/`);
		needle.get(landingPageUrl, function(error, response) {
			assert(response.statusCode == 200);
		});
	},
 	'CarRangeSelectionValuations page template loads': async function (browser) {
		var carReviewPage = browser.globals.solrRandomReview;
		const testManufacturer = carReviewPage.ManufacturerName.replace(' ','-');
 		testValuationUrl = (`${browser.launch_url}/${testManufacturer}/used-prices/`);
 		needle.get(testValuationUrl,function(error, response) {
			assert(response.statusCode == 200);
		});
	},
 	'CarDerivitiveSelectionValuations template page loads': async function (browser) {
	 	await browser.url(`${testValuationUrl}`);
 	 	const derivitiveHref = await browser.element('.model-grid__item__heading a').getAttribute('href');
	 	needle.get(derivitiveHref, function(error, response) {
	 		assert(response.statusCode == 200);
	 	});
 	},
	'CarModelSelectionValuations template page loads': async function (browser) {
		await browser.url(`${testValuationUrl}`);
	 	const modelHref = await browser.element('.model-grid__item__heading a').getAttribute('href');
	 	needle.get(modelHref, function(error, response) {
	 		assert(response.statusCode == 200);
	 	});
	 }
};
