module.exports = {
    '@tags': ['acceptanceDesktopTest','acceptanceMobileTest','stagingDesktopTest','stagingMobileTest'],
	'Load Parkers homepage': async function (browser) {
		await browser.url(`${browser.launch_url}`);
		await browser.cmpDismissal();
	},
	'Newsletter prompt appears and can be closed with no details entered': async function (browser) {
		const newsletterSetting = browser.globals.cmsNewsletterSettingsPage;
		const newsletterPromptEnabled = newsletterSetting.b_EnableNewsletterSignupPrompt;
		if (newsletterPromptEnabled === true) {
		  	console.log('Newsletter Prompt enabled');
		 	const numberOfPagesBeforePromptDisplayed = newsletterSetting.i_NewsletterSignupPageViewThreshold;
		 	const numberOfPageVisits = numberOfPagesBeforePromptDisplayed +2;
		 	console.log('solr number of pages setting = ', numberOfPagesBeforePromptDisplayed);
		 	console.log('number of test pages to be loaded = ', numberOfPageVisits);
		 	for (let step = 0; step < numberOfPageVisits; step++) {
				browser.url(`${browser.launch_url}${browser.globals.solrCarReviewPage}`);
				browser.cmpDismissal();
			}
		 	await browser.waitForElementVisible('div#newsletterSignup', 5000);
		  	await browser.waitForElementVisible('input#emailInput', 5000);
			await browser.waitForElementPresent('.newsletter-signup__close', 5000);
			await browser.element('.newsletter-signup__close').click();
			await browser.waitForElementNotVisible('div#newsletterSignup', 5000);
		} else {
		 	console.log('Newsletter Prompt disabled');
		  	await browser.expect.element('div#newsletterSignup').to.not.be.visible;
		}
	},
};
