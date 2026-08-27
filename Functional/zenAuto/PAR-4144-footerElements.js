module.exports = {
    '@tags': ['acceptanceDesktopTest','acceptanceMobileTest','stagingDesktopTest','stagingMobileTest'],
    'Navigate to Car Leasing Landing Page': async function (browser) {
        await browser.url(`${browser.launch_url}${browser.globals.carsLeasing}`);
    },
    'Footer elements displayed': async function (browser) {
        await browser.footer.footerElements();
    },
    'Footer elements displayed for car reviews landing page': async function (browser) {
    	await browser.url(`${browser.launch_url}/car-reviews/`);
        await browser.footer.footerElements();
    },
    'Footer elements displayed for Car Specs Landing page': async function (browser) {
        await browser.url(`${browser.launch_url}/car-specs/`);
        await browser.waitForElementPresent('.site-footer', 5000);
        await browser.footer.footerElements();
    },
    'Footer elements displayed for car valuations landing page': async function (browser) {
        await browser.url(`${browser.launch_url}/car-valuation/`);
        await browser.waitForElementPresent('.site-footer', 5000);
        await browser.footer.footerElements();
    },
    'Footer elements displayed for cars for sale landing page': async function (browser) {
        await browser.url(`${browser.launch_url}/cars-for-sale/`);
        await browser.waitForElementPresent('.site-footer', 5000);
        await browser.footer.footerElements();
    },
    'Footer elements displayed for car finance landing page': async function (browser) {
        await browser.url(`${browser.launch_url}/car-finance/`);
        await browser.waitForElementPresent('.site-footer', 5000);
        await browser.footer.footerElements();
    },
    'Footer elements displayed for car advice landing page': async function (browser) {
        await browser.url(`${browser.launch_url}/car-advice/`);
        await browser.waitForElementPresent('.site-footer', 5000);
        await browser.footer.footerElements();
    },
    'Footer elements displayed for company cars landing page': async function (browser) {
        await browser.url(`${browser.launch_url}/company-cars/`);
        await browser.waitForElementPresent('.site-footer', 5000);
        await browser.footer.footerElements();
    },
    'Footer elements displayed for vans and pickups landing page': async function (browser) {
        await browser.url(`${browser.launch_url}/vans-pickups/`);
        await browser.waitForElementPresent('.site-footer', 5000);
        await browser.footer.footerElements();
    },
};
