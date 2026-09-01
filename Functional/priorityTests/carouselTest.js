module.exports = {
	'@tags': ['priorityDesktopTest', 'priorityMobileTest'],
	'CFS page loads': async function (browser) {
		await browser.url(`${browser.launch_url}/cars-for-sale/used/`);
	},
	'Added today listings displayed': async function (browser) {
		await browser.waitForElementPresent('li.cfs-result-carousel__item .cfs-result-item__added', 5000);
		await browser.assert.textEquals('li.cfs-result-carousel__item .cfs-result-item__added','Added today');
	},
};
