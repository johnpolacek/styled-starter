var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var chromeCapabilities = webdriver.Capabilities.chrome();
var chromeOptions = {
    'args': ['--headless', '--disable-gpu']
};
// chromeCapabilities.set('chromeOptions', chromeOptions); // uncomment to run headless

var test = require('selenium-webdriver/testing');
var assert = require('assert');

var driver;

test.describe( 'SiteNav' , function(){
  
    test.beforeEach(function(){
        if (process.env.SAUCE_USERNAME != undefined) {
            driver = new webdriver.Builder()
                .usingServer('http://'+ process.env.SAUCE_USERNAME+':'+process.env.SAUCE_ACCESS_KEY+'@ondemand.saucelabs.com:80/wd/hub')
                .withCapabilities({
                    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
                    build: process.env.TRAVIS_BUILD_NUMBER,
                    username: process.env.SAUCE_USERNAME,
                    accessKey: process.env.SAUCE_ACCESS_KEY,
                    browserName: "chrome"
                }).build();
        }  else {
            driver = new webdriver.Builder().withCapabilities(chromeCapabilities).build();
        }
        driver.get('http://localhost:3000/');
    });
 
    test.afterEach(function(){
        driver.quit();
    });
 
    test.it('can navigate', function() {
    	console.log('\n      - active nav is home');
    	shouldNotFindXpath("//nav//p[text()='About']");
    	verifyXpath("//nav//p[text()='Styled Starter']");
    	
    	console.log('      - click about link\n')
    	clickXpath("//nav//a[@href='/about' and text()='About']");
    	waitForPageLoad();
    	
    	console.log('      - active nav is about\n')
    	verifyXpath("//nav//p[text()='About']");

    	console.log('      - click home link\n')
    	clickXpath("//nav//a[@href='/' and text()='Styled Starter']");

    	console.log('      - active nav is home');
    	shouldNotFindXpath("//nav//p[text()='About']");
    	verifyXpath("//nav//p[text()='Styled Starter']");
    });
 
});

function shouldNotFindXpath(xpath) {
	driver.findElements(By.xpath(xpath)).then(function(elements) {
		assert.equal(0,elements.length);
	});
}

function verifyXpath(xpath) {
	driver.wait(function() {
		return driver.findElements(webdriver.By.xpath(xpath)).then(function(elements) {
			return elements[0];
		});
	}, 1000, 'Failed to find '+xpath+' after 1 second');
}

function clickXpath(xpath) {
	driver.wait(function() {
		return driver.findElement(webdriver.By.xpath(xpath)).then(function(element) {
			driver.findElement(By.xpath(xpath)).click();
			return element;
		});
	}, 1000, 'Failed to find '+xpath+' after 1 second');
}

function waitForPageLoad() {
	driver.sleep(400); // Make sure new page init has started...
	driver.executeScript('return document.readyState').then(function(readyState) {
		if (readyState != 'complete') {
			driver.executeScript('window.stop();');
			driver.sleep(400);
			waitForPageLoad();
		} 
	});
}
