module.exports = {
    '@tags': ['acceptanceDesktopTest','acceptanceMobileTest','stagingDesktopTest','stagingMobileTest'],
    'Which car page loads': async function (browser) {
		await browser.url(`${browser.launch_url}/which-car/`);
        await browser.waitForElementPresent('div#carChooserSearchResults', 5000)
    },
    'Correct canonical instruction present': async function (browser) {
        await browser.assert.elementPresent('link[rel=canonical][href*="which-car"]');
    },
};
