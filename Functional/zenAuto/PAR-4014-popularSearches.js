module.exports = {
    '@tags': ['acceptanceDesktopTest','acceptanceMobileTest','stagingDesktopTest','stagingMobileTest'],
    'Navigate to Car Leasing Landing Page': async function (browser) {
        await browser.url(`${browser.launch_url}${browser.globals.carsLeasing}`);
        await browser.waitForElementPresent('article#leasingLanding', 5000);
    },
    'Popular leasing searches HTML block displayed': async function (browser) {
        await browser.assert.elementPresent('section.leasing-landing__popular-searches');
        await browser.assert.elementPresent('section.leasing-landing__popular-searches h2');
        await browser.assert.elementPresent('.leasing-landing__popular-searches__list');
    }
};
