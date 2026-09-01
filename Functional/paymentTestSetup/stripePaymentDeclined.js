module.exports = {
    '@disabled': true,
    '@tags': ['acceptanceDesktopTest','acceptanceMobileTest','stagingDesktopTest','stagingMobileTest'],
    'Navigate to car valuations page': async function (browser) {
        await browser.url(`${browser.launch_url}/${browser.globals.stripeTestUrl}`);
		await browser.cmpDismissal();
        await browser.stripePayment.paymentProcess();
    },
    'Card Information entered - declined': async function (browser) {
        const cardNumber = browser.globals.stripeTestCardNumberDeclines;
        await browser.stripePayment.invalidCardDetails(cardNumber);
    },
    'Payment declined': async function (browser) {
        await browser.stripePayment.paymentDeclinedPage();
    },
};
