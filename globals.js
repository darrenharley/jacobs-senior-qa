// ** global methods that are run
const {EventEmitter} = require('events');
const solr = require('solr-client');
const solrCfsClient = solr.createClient(process.env.SOLR_HOSTNAME, process.env.SOLR_PORT, 'carsforsale');
const solrCmsClient = solr.createClient(process.env.SOLR_HOSTNAME, process.env.SOLR_PORT, 'cms');
const solrWpReviews = solr.createClient(process.env.SOLR_HOSTNAME, process.env.SOLR_PORT, 'wpparkersreviews');
const solrWpCms = solr.createClient(process.env.SOLR_HOSTNAME, process.env.SOLR_PORT, 'wpcms');
const solrCarSpecs = solr.createClient(process.env.SOLR_HOSTNAME, process.env.SOLR_PORT, 'carspecs');
//Using Faker
const faker = require('faker');
const userEmail = faker.internet.email();
const userFirstName = faker.name.firstName();
const userSurname = faker.name.lastName();
const userPassword = faker.internet.password();
//Using Car VRM with reg plate
const vrmTestCarRegCaps = 'YN63LHH';
const vrmTestCarReg = 'yn63lhh';
const incorrectCarReg = 'y63nlhh';
// Zen Reviews
const zenReviewSearchExample = 'https://zen.auto/search-personal-leasing/budget?status=special';
const zenReviewsConfigExample = 'https://zen.auto/configure?id=2079211&calculationParameters=duration%3D36%2Cyearly_mileage%3D8000%2Cinitial_payment%3D1500'
// Strip Payment
const stripeTestUrl = 'volvo/v60/coupe-2010/d3-(136bhp)-se-lux-(0613-)-5d/103/select-a-valuation/';
const stripeTestCardNumberSucceeds = '4242424242424242';
const stripeTestCardNumberRequiresAuth = '4000002500003155';
const stripeTestCardNumberDeclines = '4000000000009995';
const staticBauerCdnAdsTxtLocation = 'http://static.bauercdn.com/ads.txt';
const stagingStaticBauerCdnAdsTxtLocation = 'http://static.stg.bauercdn.com/ads.txt';
// setting up random solr pages
var publishDateRegex = '[2024-06-01T00:00:00Z TO 2024-12-31T23:59:59Z]';
let solrModelPage;
let cmsNewsletterSettingsPage;
let solrCarReviewPage;
let solrRandomReview;
let solrCarCmsPage;
let solrRandomElectricReview;
let solrCarElectricReviewPage;
let solrRandomSpecPage;
var solrRandomReviewModelId;
let solrRandomCfsEntry;

module.exports = {
    // before hook
    async beforeEach (browser, done) {
        console.log('Setting up the test...');
        EventEmitter.defaultMaxListeners = 100;
        // random solr model page
		browser.pause(1000);
        var randomSolrModel = require('../Tests/nightwatch/custom-commands/solrQuery/randomSolrModel');
        randomSolrModel.random_solr_wp_model_entry(solrWpCms, function(err, solrRandomModel) {
            if(err) {
                console.log(err);
                done(err);
            } else {
                browser.globals.solrModelPage = solrRandomModel.PageUrl.replace('/penelope', '');
                done();
            }
        });
        // newsletter signup
        browser.pause(1000);
        var cmsNewsLetterSettings = require('../Tests/nightwatch/custom-commands/solrQuery/globalSettings/newsletterSignUp');
        cmsNewsLetterSettings.newsletter_signup_prompt_settings(solrCmsClient, function(err,cmsNewsletterSettings) {
            if(err) {
                console.log(err);
                done(err);
            } else {
                browser.globals.cmsNewsletterSettingsPage = cmsNewsletterSettings;
                done();
            }
        });
        // random review and spec page
        browser.pause(1000);
        var randomSolrReview = require('../Tests/nightwatch/custom-commands/solrQuery/randomSolrWpReviewEntry');
		randomSolrReview.random_solr_wp_review_entry(solrWpReviews, publishDateRegex, function(err,solrRandomReview) {
            if(err) {
                console.log(err);
                done(err);
            } else {
                browser.globals.solrRandomReview = solrRandomReview;
                solrRandomReviewModelId = solrRandomReview.ModelId;
                browser.globals.solrCarReviewPage = solrRandomReview.PageUrl.replace('/penelope', '');
                done();
            }
            var randomSolrSpec = require('../Tests/nightwatch/custom-commands/solrQuery/randomSolrSpecEntry');
            randomSolrSpec.random_solr_spec_entry(solrCarSpecs, solrRandomReviewModelId, function(err, solrRandomSpec) {
                if(err) {
                    console.log(err);
                    done(err);
                } else {
                 browser.globals.solrRandomSpecPage = solrRandomSpec;
                    done();
                }
            })
        }),
        // random cms entry
        browser.pause(1000);
        var randomSolrCms = require('../Tests/nightwatch/custom-commands/solrQuery/randomSolrWpCmsEntry');
        randomSolrCms.random_solr_wp_cms_entry(solrWpCms, function(err,solrCarCms) {
            if(err) {
                console.log(err);
                done(err);
            } else {
                browser.globals.solrCarCmsPage = solrCarCms;
                done();
            }
        });
        // random electric car review
        browser.pause(1000);
        var randomSolrElectricReview = require('../Tests/nightwatch/custom-commands/solrQuery/randomSolrElectricCarReview');
        randomSolrElectricReview.random_solr_wp_electric_review_entry(solrWpReviews, function(err,solrRandomElectricReview) {
            if(err) {
                console.log(err);
                done(err);
            } else {
                browser.globals.solrRandomElectricReview = solrRandomElectricReview;
                browser.globals.solrCarElectricReviewPage = solrRandomElectricReview.PageUrl.replace('/penelope', '');
                done();
            }
        });
        // random car for sale
        browser.pause(1000);
        var randomSolrCfsEntry = require('../Tests/nightwatch/custom-commands/solrQuery/randomSolrCfsEntry');
        randomSolrCfsEntry.random_solr_cfs_entry(solrCfsClient, function(err,solrRandomCfsEntry) {
            if(err) {
                console.log(err);
                done(err);
            } else {
                browser.globals.solrRandomCfsEntry = solrRandomCfsEntry;
                done();
            }
        });
    },
    // after hook
    afterEach: async function(browser, done) {
        console.log("Closing down...")
        await browser.end();
        done();
    },
    carReviews:'/car-reviews/',
    carSpecs: '/car-specs/',
    carValuations: '/car-valuation/',
    carsForSale: '/cars-for-sale/',
    carsLeasing: '/car-leasing/',
    carFinance: '/car-finance/',
    carInsurance: '/car-insurance/',
    carAdvice: '/car-advice/',
    companyCars: '/company-cars/',
    carRoadTax: '/car-tax/',
    vanAndPickups: '/vans-pickups/',
    vanAndPickupsForSale: '/vans-pickups/for-sale/',
    sellMyCar: '/sell-my-car/',
    sellMyVan: '/vans-pickups/sell-my-van/',
    solrCfsClient,
    solrCmsClient,
    solrWpReviews,
    solrCarSpecs,
    solrWpCms,
    userEmail,
    userFirstName,
    userSurname,
    userPassword,
    vrmTestCarRegCaps,
    vrmTestCarReg,
    incorrectCarReg,
    zenReviewSearchExample,
    zenReviewsConfigExample,
    stripeTestUrl,
    stripeTestCardNumberSucceeds,
    stripeTestCardNumberRequiresAuth,
    stripeTestCardNumberDeclines,
    staticBauerCdnAdsTxtLocation,
    stagingStaticBauerCdnAdsTxtLocation,
    publishDateRegex,
    solrRandomReviewModelId,
    waitForConditionTimeout: 60000
};
