var assert = require('assert');

module.exports = {
	'@tags': ['priorityDesktopTest'],
    'Compare static.bauercdn.com ads.txt with site ads.txt': async function (browser) {
		await browser.url(browser.globals.staticBauerCdnAdsTxtLocation);
		await browser.getText('css selector', 'body pre', function(staticBauerAdsText) {
			const staticBauerCdnAdsTxt = staticBauerAdsText.value;
			browser.url(`${browser.launch_url}/ads.txt`);
			const siteAdsText = browser.element('body pre').getText()
			const parkersSiteAdsTxt = siteAdsText.value;
			assert(parkersSiteAdsTxt === staticBauerCdnAdsTxt);
		});
	},
};
