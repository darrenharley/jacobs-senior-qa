module.exports = {
    '@tags': ['acceptanceDesktopTest','acceptanceMobileTest','stagingDesktopTest','stagingMobileTest'],
	'Load Parkers homepage': async function (browser) {
		await browser.url(`${browser.launch_url}`);
		await browser.cmpDismissal();
	},
	'Load page and check Newsletter prompt not displayed if applicable': async function (browser) {
		const newsletterSetting = browser.globals.cmsNewsletterSettingsPage;
		const newsletterPromptEnabled = newsletterSetting.b_EnableNewsletterSignupPrompt;
		const numberOfPagesBeforePromptDisplayed = newsletterSetting.i_NewsletterSignupPageViewThreshold;
		if (newsletterPromptEnabled === 'false') {
			console.log('Newsletter Prompt disabled');
			await browser.expect.element('div#newsletterSignup').to.not.be.visible;
		} else if (numberOfPagesBeforePromptDisplayed >1) {
			console.log('Newsletter Prompt enabled');
			await browser.expect.element('div#newsletterSignup').to.not.be.visible;
		}
		else {
			await browser.assert.visible('div#newsletterSignup');
		}
	},
};
