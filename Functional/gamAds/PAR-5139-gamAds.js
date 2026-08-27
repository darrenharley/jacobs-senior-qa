module.exports = {
  '@tags': ['gamAdsDesktopTest','gamAdsMobileTest','stagingGamAdsDesktopTest','stagingGamAdsMobileTest'],
	'Gam ads displayed for best cars landing page': async function(browser) {
		await browser.url(`${browser.launch_url}/best-cars/`);
   		await browser.testSetup();
		await browser.waitForElementPresent('div[id*="mpu"]', 30000);
	},
	'Gam ads displayed for used cfs landing page': async function(browser) {
    	await browser.url(`${browser.launch_url}/cars-for-sale/used/`);
		await browser.waitForElementPresent('div[id*="mpu"]');
	},
	'Gam ads displayed for used vans for sale landing page': async function (browser) {
    	await browser.url(`${browser.launch_url}/vans-pickups/for-sale/used/`);
		await browser.waitForElementPresent('div[id*="mpu"]');
	},
	'Gam ads displayed for car valuation landing page': async function (browser) {
		await browser.url(`${browser.launch_url}/car-valuation/`);
		await browser.waitForElementPresent('div[id*="mpu"]')
	},
	'Gam ads displayed for car leasing advice landing page': async function (browser) {
		await browser.url(`${browser.launch_url}/car-leasing/advice/`);
		await browser.waitForElementPresent('div[id*="mpu"]')
	},
	'Gam ads displayed for car reviews landing page': async function (browser) {
		await browser.url(`${browser.launch_url}/car-reviews/`);
		await browser.waitForElementPresent('div[id*="mpu"]')
	},
	'Gam ads displayed for random car review page': async function (browser) {
		await browser.url(`${browser.launch_url}${browser.globals.solrCarReviewPage}`);
		await browser.waitForElementPresent('div[id*="mpu"]')
	},
};
