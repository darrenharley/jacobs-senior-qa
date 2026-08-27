var carManufacturer;
var randomCmsPage
module.exports = {
    '@tags': ['sitemapDesktopTest','stagingSitemapDesktopTest'],
    'Car Manufacturer Selection specs page template listed': async function (browser) {
        randomCmsPage = browser.globals.solrCarCmsPage;
        carManufacturer = randomCmsPage.s_PrimarySection;
        await browser.url(`${browser.launch_url}/${carManufacturer}/specs`);
        		await browser.source(function (template) {
			browser.verify.equal((template.value.includes('Templates.CarRangeSelectionSpecs')), true);
		});
    },
    'Car Range Selection specs page template listed': async function (browser) {
        const carRange = randomCmsPage.s_SecondarySection;
        await browser.url(`${browser.launch_url}/${carManufacturer}/${carRange}/specs`);
		await browser.source(function (template) {
			browser.verify.equal((template.value.includes('Templates.CarModelSelectionSpecs')), true);
		});
    },
    'Sitemap xml contains all 3 specs files': async function (browser) {
        await browser.url(`${browser.launch_url}/sitemap.xml`);
        await browser.assert.textContains('body', `${browser.launch_url}/sitemap/zip-files/spec-1.xml.gz`);
        await browser.assert.textContains('body', `${browser.launch_url}/sitemap/zip-files/spec-2.xml.gz`);
        await browser.assert.textContains('body', `${browser.launch_url}/sitemap/zip-files/spec-3.xml.gz`);
    },
};
