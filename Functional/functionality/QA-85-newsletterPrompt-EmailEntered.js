module.exports = {
    '@tags': ['acceptanceDesktopTest','acceptanceMobileTest','stagingDesktopTest','stagingMobileTest'],
	'Load Parkers homepage': async function (browser) {
		await browser.url(`${browser.launch_url}`);
		await browser.cmpDismissal();
	},
	'Newsletter prompt appears and details entered prior to closing': async function (browser) {
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
		 	await browser.assert.visible('div#newsletterSignup');
		  	await browser.assert.visible('input#emailInput');
		  	await browser.setValue('input#emailInput', 'testEmail@test.co.uk');
		  	await browser.click('.newsletter-signup__submit__button');
		  	await browser.waitForElementPresent('.newsletter-signup__submit__success-label', 3000);
		 	await browser.assert.textContains('.newsletter-signup__submit__success-label', 'Your email has been successfully submitted!');
		 	await browser.assert.elementPresent('button.newsletter-signup__complete-button');
		 	await browser.click('button.newsletter-signup__complete-button');
		  	await browser.expect.element('div#newsletterSignup').to.not.be.visible;
		} else {
		 	console.log('Newsletter Prompt disabled');
		  	await browser.expect.element('div#newsletterSignup').to.not.be.visible;
		}
	},
};
