module.exports = {
	'@disabled': true,
    '@tags': ['acceptanceDesktopTest','acceptanceMobileTest','stagingDesktopTest','stagingMobileTest'],
    'Model insurance groups page loads': async function (browser) {
		await browser.testSetup();
	    await browser.url(`${browser.launch_url}${browser.globals.solrModelPage}insurance-groups/`);
    },
    'Insurance page elements displayed': async function (browser) {
		await browser.assert.elementPresent('div#modelInsuranceGroupsPage');
		await browser.elements('css selector', 'div.model-insurance-groups-page__trim-list', function (trimListPresent) {
			if (trimListPresent.value.length === 0) {
	 			console.log('No trim list for this model of car')
	 		} else {
				browser.assert.elementPresent('a.link-list__item[href*="/cars-for-sale/search-results/"]');
				browser.assert.elementPresent('li.pipe-list__item');
				browser.assert.elementPresent('li.pipe-list__item a[href="#trim_1"]');
				browser.assert.elementPresent('div.leasing-com-widget');
			}
		});
	},
};
