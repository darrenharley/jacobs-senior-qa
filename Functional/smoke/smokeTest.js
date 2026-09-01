var alasql = require('alasql');
var axios = require('axios');

module.exports = {
	'@tags': ['smokeTest'],
    'Smoke test for Parkers pages': async (browser) => {
        const result = await alasql.promise('select URL from xlsx("./Functional/testUrls.xlsx",{sheetid:"smokeUrls"})');
        const xcelData = result.map(item => {
            return item.URL;
        });
        async function smokeUrlsTestArr(item) {
            const response = await axios.get(browser.launch_url + item);
            browser.verify.equal(response.status, 200);
            console.log('Smoke test URL =', (browser.launch_url + item + '  status code = ' + response.status));
        }
        for (var index = 0; index < xcelData.length; index++) {
            const smokeTestUrl = xcelData[index];
            await smokeUrlsTestArr(smokeTestUrl);
        }
    },
};
