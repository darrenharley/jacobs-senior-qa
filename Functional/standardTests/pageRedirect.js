module.exports = {
    '@tags': ['acceptanceDesktopTest','acceptanceMobileTest','stagingDesktopTest', 'stagingMobileTest'],
    '/cars/road-tax redirects to /car-tax/': async function(browser) {
        const currentUrl = await browser.navigateTo(`${browser.launch_url}/cars/road-tax`).getCurrentUrl();
        console.log('Car Tax Landing Page URL = ', currentUrl);
        await browser.assert.urlEquals(`${browser.launch_url}/car-tax/`);
    },
};
