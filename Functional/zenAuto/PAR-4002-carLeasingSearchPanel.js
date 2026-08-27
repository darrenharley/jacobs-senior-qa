module.exports = {
    '@tags': ['acceptanceDesktopTest','acceptanceMobileTest','stagingDesktopTest','stagingMobileTest'],
    'Navigate to Car Leasing Landing Page': async function (browser) {
        await browser.url(`${browser.launch_url}${browser.globals.carsLeasing}`);
    },
    'Search panel displayed': async function (browser) {
        await browser.assert.elementPresent('div.leasing-landing__search');
        await browser.assert.elementPresent('.ldc-search-header');
        await browser.assert.elementPresent('.ldc-search-panel-inner');
        await browser.assert.elementPresent('button[data-test="clear-search-button"]');
        await browser.assert.elementPresent('.ldc_leasing_logo');
        await browser.assert.attributeContains('.ldc_leasing_logo a','href','leasing.com');
    },
};
