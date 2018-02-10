var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var chromeCapabilities = webdriver.Capabilities.chrome();
//setting chrome options to start the browser fully maximized
var chromeOptions = {
    'args': ['--headless', '--disable-gpu']
};
chromeCapabilities.set('chromeOptions', chromeOptions);



var test = require('selenium-webdriver/testing');
var assert = require('assert');

var driver;

test.describe( 'SiteNav' , function() {

    // longer timeout for selenium tests
    this.timeout(10000);
  
    test.beforeEach(function(){
        driver = new webdriver.Builder().withCapabilities(chromeCapabilities).build();
        driver.get('http://localhost:3000/');
    });
 
    test.afterEach(function(){
        driver.quit();
    });
 
    test.it('can navigate', function() {
        console.log('\n      - active nav is home');
        shouldNotFindXpath("//nav//p[text()='About']");
        verifyXpath("//nav//p[text()='Styled Starter']");
        
        console.log('      - click About link\n')
        clickXpath("//nav//a[@href='/about' and text()='About']");
        waitForPageLoad();
        
        console.log('      - active nav is About\n')
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
    }, 2000, 'Failed to find '+xpath+' after 2 seconds');
}

function clickXpath(xpath) {
    driver.wait(function() {
        return driver.findElement(webdriver.By.xpath(xpath)).then(function(element) {
            driver.findElement(By.xpath(xpath)).click();
            return element;
        });
    }, 2000, 'Failed to find '+xpath+' after 2 seconds');
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