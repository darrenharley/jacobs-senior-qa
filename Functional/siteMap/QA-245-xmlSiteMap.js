var alasql = require('alasql');
var axios = require('axios');

module.exports = {
    '@tags': ['sitemapDesktopTest','stagingSitemapDesktopTest'],
    'Sitemap test for Parkers pages': async (browser) => {
        const result = await alasql.promise('select URL from xlsx("./Functional/testUrls.xlsx",{sheetid:"QA-245-xmlSiteMap"})');
        const xcelData = result.map(item => {
            return item.URL;
        });
        async function siteMapUrlsTestArr(item) {
            axios.get(`${browser.launch_url} + item`)
            .catch(function (error) {
                if (error.response) {
                    console.log(`${browser.launch_url} + item`, error.response.status);
                    throw new Error();
                }
            })
        }
        for (let index = 0; index < 100; index++) {
            const xmlTestUrl = xcelData[Math.floor(Math.random()*xcelData.length)];
            await siteMapUrlsTestArr(xmlTestUrl);
        }
    },
};
