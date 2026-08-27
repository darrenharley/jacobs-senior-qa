// persist_globals
module.exports = {
	src_folders: ['Functional', 'Load'],
	page_objects_path: ['nightwatch/page-objects'],
  	custom_commands_path: ['nightwatch/custom-commands'],
	globals_path: './globals.js',
	waitForConditionTimeout: 5000,
	persist_globals: true,
	timeout_options: {
		timeout:30000,
		retry_attempts: 1
	},
	webdriver: {},
  	test_workers: {
    	enabled: true,
		workers: 'auto'
  	},
	test_settings: {
    	default: {
      		disable_error_log: false,
			launch_url: process.env.LAUNCH_URL,
			screenshots: {
        		enabled: false,
        		path: './screens',
        		on_failure: false
      		},
			detailed_output:true,
			output:true,
			disable_colors: true,
			live_output: true,
			output_folder: 'tests_output',
			desiredCapabilities: {
        		browserName: 'chrome'
      		},
      		webdriver: {
        		start_process: true,
        		server_path: ''
      		},
    	},
		safari: {
			desiredCapabilities: {
				browserName: 'safari',
				alwaysMatch: {
					acceptInsecureCerts: false
				}
			},
			webdriver: {
				start_process: true,
				server_path: ''
			}
		},
		firefox: {
			desiredCapabilities: {
				browserName: 'firefox',
				alwaysMatch: {
					acceptInsecureCerts: true,
					'moz:firefoxOptions': {
						args: []
					}
				}
			},
			webdriver: {
				start_process: true,
				server_path: '',
				cli_args: []
			}
		},
		chrome: {
			desiredCapabilities: {
				browserName: 'chrome',
				'goog:chromeOptions': {
					w3c: true,
					args: [
						'--headless',
						'--no-sandbox',
						'--ignore-certificate-errors',
					]
				}
			},
			webdriver: {
				start_process: true,
				server_path: '',
				cli_args: []
			}
		},
		edge: {
			desiredCapabilities: {
				browserName: 'MicrosoftEdge',
				'ms:edgeOptions': {
					w3c: true,
					args: []
				}
			},
			webdriver: {
				start_process: true,
				server_path: '',
				cli_args: []
			}
		},
		'android.emulator.firefox': {
			desiredCapabilities: {
				real_mobile: false,
				avd: 'nightwatch-android-11',
				browserName: 'firefox',
				acceptInsecureCerts: true,
				'moz:firefoxOptions': {
					args: [],
					androidPackage: 'org.mozilla.firefox',
				}
			},
			webdriver: {
				start_process: true,
				server_path: '',
				cli_args: []
			}
		},
		'android.emulator.chrome': {
			desiredCapabilities: {
				real_mobile: false,
				avd: 'nightwatch-android-11',
				browserName: 'chrome',
				'goog:chromeOptions': {
					w3c: true,
					args: [],
					androidPackage: 'com.android.chrome',
				},
			},
			webdriver: {
				start_process: true,
				server_path: 'chromedriver-mobile/chromedriver',
				cli_args: []
			}
		},
		'ios.simulator.iphone.15.safari': {
			desiredCapabilities: {
				browserName: 'safari',
				javascriptEnabled: true,
				platformName: 'iOS',
				'safari:useSimulator': true,
				platformVersion: '17.0',
				deviceName: 'iPhone 15'
			},
			webdriver: {
				start_process: true,
				server_path: '',
				cli_args: []
			}
		},
		'ios.simulator.iphone.se.safari': {
			desiredCapabilities: {
				browserName: 'safari',
				javascriptEnabled: true,
				platformName: 'iOS',
				'safari:useSimulator': true,
				platformVersion: '16.4',
				deviceName: 'iPhone SE'
			},
			webdriver: {
				start_process: true,
				server_path: '',
				cli_args: []
			}
		},
		app: {
			selenium: {
				start_process: true,
				use_appium: true,
				host: 'localhost',
				port: 4723,
				server_path: '',
				cli_args: [],
			},
			webdriver: {
				timeout_options: {
					timeout: 150000,
					retry_attempts: 3
				},
				keep_alive: false,
				start_process: false
			}
		},
		'app.android.emulator': {
			extends: 'app',
			'desiredCapabilities': {
				browserName: null,
				platformName: 'android',
				'appium:options': {
					automationName: 'UiAutomator2',
					avd: 'nightwatch-android-11',
					app: `${__dirname}/nightwatch/sample-apps/wikipedia.apk`,
					appPackage: 'org.wikipedia',
					appActivity: 'org.wikipedia.main.MainActivity',
					appWaitActivity: 'org.wikipedia.onboarding.InitialOnboardingActivity',
					chromedriverExecutable: `${__dirname}/chromedriver-mobile/chromedriver`,
					newCommandTimeout: 0
				}
			}
		},
		'app.android.real': {
			extends: 'app',
			'desiredCapabilities': {
				browserName: null,
				platformName: 'android',
				'appium:options': {
					automationName: 'UiAutomator2',
					app: `${__dirname}/nightwatch/sample-apps/wikipedia.apk`,
					appPackage: 'org.wikipedia',
					appActivity: 'org.wikipedia.main.MainActivity',
					appWaitActivity: 'org.wikipedia.onboarding.InitialOnboardingActivity',
					chromedriverExecutable: '',
					newCommandTimeout: 0,
				}
			}
		},
		'app.ios.simulator': {
			extends: 'app',
			'desiredCapabilities': {
				browserName: null,
				platformName: 'ios',
				'appium:options': {
					automationName: 'XCUITest',
					deviceName: 'iPhone 13',
					app: `${__dirname}/nightwatch/sample-apps/wikipedia.zip`,
					bundleId: 'org.wikimedia.wikipedia',
					newCommandTimeout: 0
				}
			}
		},
		'app.ios.real': {
			extends: 'app',
			'desiredCapabilities': {
				browserName: null,
				platformName: 'ios',
				'appium:options': {
					automationName: 'XCUITest',
					app: `${__dirname}/nightwatch/sample-apps/wikipedia.zip`,
					bundleId: 'org.wikimedia.wikipedia',
					newCommandTimeout: 0,
				}
			}
		},
		browserstack: {
			selenium: {
				start_process: false,
				host: 'hub-cloud.browserstack.com',
				port: 443
			},
			desiredCapabilities: {
			launch_url: process.env.LAUNCH_URL,
				project: 'Parkers',
				build: 'Parkers Daily Regression Tests',
				console: 'verbose',
				'bstack:options': {
					local: 'false',
					userName: process.env.BROWSERSTACK_ACCESS_USER,
					accessKey: process.env.BROWSERSTACK_ACCESS_KEY,
					preventCrossSiteTracking : true,
					disableCorsRestrictions: true,
					debug: true,
					seleniumLogs: true,
					appiumLogs: true,
					telemetryLogs: true,
					networkLogs: true,
					networkLogsOptions: {
						'captureContent': true
					},
				}
			},
			webdriver: {
				keep_alive: true,
				start_process: false
			}
		},
		'browserstack.desktop.windows.chrome': {
			local: 'false',
			extends: 'browserstack',
			browserName: 'Chrome',
			os: 'Windows',
			osVersion: '11',
			browserVersion: 'latest',
			seleniumVersion: '3.14.0'
		},
		'browserstack.desktop.windows.firefox': {
			extends: 'browserstack',
			browserName: 'Firefox',
			os: 'Windows',
			osVersion: '11',
			browserVersion: 'latest',
			seleniumVersion: '3.5.2'
		},
		'browserstack.desktop.windows.edge': {
			local: 'false',
			extends: 'browserstack',
			browserName: 'Edge',
			os: 'Windows',
			os_version: '11',
			browserVersion: 'latest',
			seleniumVersion: '3.5.2'
		},
		'browserstack.desktop.iOS.chrome': {
			local: 'false',
			extends: 'browserstack',
			seleniumVersion: '3.14.0',
			desiredCapabilities: {
				browserName: 'Chrome',
				browserVersion: 'latest',
				'bstack:options': {
					os: 'OS X',
					osVersion: 'Sonoma',
				}
			}
		},
		'browserstack.desktop.iOS.firefox': {
			local: 'false',
			extends: 'browserstack',
			seleniumVersion: '3.14.0',
			desiredCapabilities: {
				browserName: 'Firefox',
				browserVersion: 'latest',
				'bstack:options': {
					os: 'OS X',
					osVersion: 'Sonoma',
				}
			}
		},
		'browserstack.desktop.iOS.safari': {
			local: 'false',
			extends: 'browserstack',
			browserName: 'Safari',
			os: 'OS X',
			osVersion: 'Sonoma',
			browserVersion: 'latest',
			seleniumVersion: '3.14.0',
		},
		'browserstack.mobile.android.device1': {
			local: 'false',
			extends: 'browserstack',
			desiredCapabilities: {
				browserName: 'chrome',
				'bstack:options' : {
					osVersion: '13.0',
					deviceName: 'Samsung Galaxy S23'
				},
				'goog:chromeOptions': {}
			}
		},
		'browserstack.mobile.android.device2': {
			local: 'false',
			extends: 'browserstack',
			desiredCapabilities: {
				'bstack:options' : {
					osVersion: '13.0',
					deviceName: 'Samsung Galaxy Tab S9'
				},
				browserName: 'chrome',
				'goog:chromeOptions': {}
			}
		},
		'browserstack.mobile.ios.device1': {
			local: 'false',
			extends: 'browserstack',
			javascriptEnabled: true,
			acceptSslCerts: true,
			preventCrossSiteTracking : false,
			disableCorsRestrictions: true,
			desiredCapabilities: {
				w3c: true,
					'excludeSwitches': ['disable-popup-blocking'],
					args:[
						'--ignore-certificate-errors',
						'--disable-gpu',
					 	'--user-data-dir="/tmp/chrome_dev_test"',
						'--disable-web-security',
					],
				'bstack:options' : {
					osVersion: '17',
					deviceName: 'iPhone 15',
					realMobile: true,
					browserName: 'Safari'
				},
			}
		},
		'browserstack.mobile.ios.device2': {
			local: 'false',
			extends: 'browserstack',
			javascriptEnabled: true,
			acceptSslCerts: true,
			preventCrossSiteTracking : false,
			disableCorsRestrictions: true,
			desiredCapabilities: {
				w3c: true,
				'excludeSwitches': ['disable-popup-blocking'],
				args:[
					'--ignore-certificate-errors',
					'--disable-gpu',
					'--disable-web-security',
				],
				'bstack:options' : {
					osVersion: '16',
					deviceName: 'iPhone SE 2020',
					realMobile: true,
					browserName: 'Safari'
				},
			}
		},
		'browserstack.tablet.ios.device1': {
			extends: 'browserstack',
			desiredCapabilities: {
				'bstack:options' : {
					osVersion: "17",
					deviceName: "iPad Pro 12.9 2021"
				},
			}
		},
		'browserstack.desktop.windows.chrome.staging': {
			local: 'true',
			extends: 'browserstack',
			desiredCapabilities: {
				browserName: 'Chrome',
				browser_version: 'latest',
				os: 'Windows',
				os_version: '11',
			}
		},
  	},
};
