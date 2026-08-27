const valuationLoginEmail = process.env.VALUATION_LOGIN_EMAIL;
const valuationLoginPassword = process.env.VALUATION_LOGIN_PASSWORD;

module.exports = {
    '@disabled': true,
    '@tags': ['acceptanceDesktopTest','acceptanceMobileTest','stagingDesktopTest', 'stagingMobileTest'],
    'Registration valuation page loads': async function (browser) {
        await browser.url(`${browser.launch_url}/volvo/v60/coupe-2010/d3-(136bhp)-se-lux-(0613-)-5d/103/select-a-valuation/`);
        await browser.cmpDismissal();
    },
    'User taken to Custom Valuation page': async function (browser) {
        await browser.element('.valuation-primer-page__option__cta__link--custom').click();
    },
    'User able to login': async function (browser) {
        await browser.waitForElementPresent('a.choose-package__login-link', 5000);
        await browser.element('a.choose-package__login-link').click();
        await browser.waitForElementVisible('.reveal-modal input#Email', 5000);
        await browser.pause(1000);
        await browser.element('.reveal-modal input#Email').sendKeys(valuationLoginEmail);
        await browser.element('.reveal-modal input#Password').sendKeys(valuationLoginPassword);
        await browser.element('.reveal-modal input[value="Go"]').click();
    },
    'User is directed to the Custom Valuations page': async function (browser) {
        await browser.source(function (template) {
            browser.verify.equal((template.value.includes('Templates.CarValuationCustom')), true);
	    });
    },
    'Custom Valuations page displayed correctly': async function (browser) {
        await browser.assert.elementPresent('.valuation-custom-page__car-info');
        await browser.assert.elementPresent('.valuation-custom-page__adjust__panel--mileage');
        await browser.assert.elementPresent('.valuation-custom-page__adjust__panel--valuation');
        await browser.assert.elementPresent('.motorway-widget__selling');
        await browser.assert.elementPresent('.motorway-widget__form');
        await browser.assert.elementPresent('.motorway-widget__powered-by');
        await browser.assert.elementPresent('.motorway-widget__trust-pilot');
    },
};
