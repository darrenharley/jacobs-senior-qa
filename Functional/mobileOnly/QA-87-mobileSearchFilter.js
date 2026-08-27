describe('QA-87: Acceptance test - search filters on mobile (CFS and Lease)', function() {
    this.tags = ['acceptanceMobileTest','stagingMobileTest'],
	it('Navigate to Car Leasing page', async function (browser) {
		await browser.url(`${browser.launch_url}/bmw/1-series/hatchback-2019/car-leasing/`);
		// for local testing only
		browser.setDeviceDimensions({
			width: 375,
			height: 667
		})
		browser.cmpDismissal();
	})
	it('Clicking on Filter button opens filter window', async function (browser) {
		await browser.waitForElementPresent('button[data-test="open-filters-button"]', 5000);
		await browser.element('button[data-test="open-filters-button"]').click()
		await browser.waitForElementVisible('div#ldc_main', 5000);
		await browser.assert.elementPresent('div.ldc_content.open');
		await browser.assert.elementPresent('div.ldc_content.open .ldc_search_filters_list');
		await browser.assert.elementPresent('div#seeResultsButton');
	})
	it ('Clicking on See Results button closes filter window', async function (browser) {
		await browser.element('button[data-test="see-results-button"]').click()
		await browser.waitForElementPresent('div#ldc_main', 5000);
		await browser.waitForElementNotPresent('div.ldc_content.open', 5000)
		await browser.waitForElementNotPresent('div.ldc_content.open .ldc_search_filters_list', 5000)
		await browser.waitForElementNotPresent('div#seeResultsButton', 5000)
	 })
})

