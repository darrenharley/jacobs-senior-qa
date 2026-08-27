module.exports = {
    '@tags': ['acceptanceDesktopTest','acceptanceMobileTest','stagingDesktopTest', 'stagingMobileTest'],
    'Sell My Car landing page loads': async function (browser) {
        await browser.url(`${browser.launch_url}/sell-my-car/`);
    },
    'Motorway integration is displayed': async function (browser) {
        await browser.sellMyCar.homepage.motorwayWidget();
        await browser.sellMyCar.homepage.howMotorwayWorks();
        await browser.sellMyCar.homepage.verifiedDealers();
        await browser.sellMyCar.homepage.whyUseMotorway();
    },
};

