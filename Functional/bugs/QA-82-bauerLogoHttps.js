module.exports = {
    '@tags': ['acceptanceDesktopTest','acceptanceMobileTest','stagingDesktopTest', 'stagingMobileTest'],
	'Bauer logo now https': async function (browser) {
		await browser.url(`${browser.launch_url}/mixed-content/`);
		await browser.assert.elementPresent('a.error-footer__bauer-logo img[src*="https://static-cdn.bauersecure.com"]');
	},
};
