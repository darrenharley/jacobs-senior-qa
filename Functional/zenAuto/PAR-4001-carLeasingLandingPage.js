module.exports = {
    '@tags': ['acceptanceDesktopTest','acceptanceMobileTest','stagingDesktopTest','stagingMobileTest'],
    'Navigate to Car Leasing Landing Page': async function (browser) {
        await browser.url(`${browser.launch_url}/car-leasing/`);
    },
    'Page title, h1 and meta description displayed': async function (browser) {
        await browser.waitForElementPresent('article#leasingLanding', 5000)
        await browser.getTitle(function(title) {
            browser.assert.equal(title, 'Car leasing | Compare best car lease deals');
        })
        await browser.assert.textEquals('header h1', 'Car leasing');
        await browser.assert.elementPresent('meta[name="description"][content="Search and compare the best car leasing deals from approved car dealers across the UK. You may be surprised just to see how much car you can afford with car leasing"]');
    },
};
