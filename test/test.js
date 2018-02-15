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

test.describe( 'About' , function() {

    // longer timeout for selenium tests
    this.timeout(10000);
  
    test.beforeEach(function(){
        driver = new webdriver.Builder().withCapabilities(chromeCapabilities).build();
    });
 
    test.afterEach(function(){
        driver.quit();
    });
 
    test.it('can navigate top level', function() {
        verifyTopLevelNav('About');
    });
 
});

test.describe( 'Design' , function() {

    // longer timeout for selenium tests
    this.timeout(10000);
  
    test.beforeEach(function(){
        driver = new webdriver.Builder().withCapabilities(chromeCapabilities).build();
    });
 
    test.afterEach(function(){
        driver.quit();
    });
 
    test.it('can navigate top level', function() {
        verifyTopLevelNav('Design');
    });

    test.it('can navigate design pages', function() {
        driver.get('http://localhost:3000/design#/');
        waitForPageLoad();

        console.log('\n      - default section is Introduction');
        verifyXpath("//h1[text()='Introduction']");

        verifyDesignCenterNav('Color', 'Color');
        verifyDesignCenterNav('Typography', 'Font');
        verifyDesignCenterNav('Layout', 'Layout');
        verifyDesignCenterNav('Components','Overview');
        verifyDesignCenterNav('Introduction','Introduction');
    });

    test.it('can navigate design typography subsections', function() {
        driver.get('http://localhost:3000/design#/font');
        waitForPageLoad();

        console.log('\n      - default section is Font');
        verifyXpath("//h1[text()='Font']");

        verifyDesignCenterSubsection('Type Scale');
        verifyDesignCenterSubsection('Text Elements');
        verifyDesignCenterSubsection('Headings');
        verifyDesignCenterSubsection('Paragraph');
        verifyDesignCenterSubsection('Lists');
        verifyDesignCenterSubsection('Font');
    });

    test.it('can navigate design components subsections', function() {
        driver.get('http://localhost:3000/design#/overview');
        waitForPageLoad();

        console.log('\n      - default section is Overview');
        verifyXpath("//h1[text()='Overview']");

        verifyDesignCenterSubsection('Buttons');
        verifyDesignCenterSubsection('Cards');
        verifyDesignCenterSubsection('Forms');
        verifyDesignCenterSubsection('Overview');
    });
 
});

function verifyTopLevelNav(section) {
    driver.get('http://localhost:3000/');
    waitForPageLoad();

    console.log('\n      - active nav is home');
    shouldNotFindXpath("//nav//p[text()='"+section+"']");
    verifyXpath("//nav//p[text()='Styled Starter']");
    
    console.log('      - click '+section+' link\n')
    clickXpath("//nav//a[@href='/"+section.toLowerCase()+"' and text()='"+section+"']");
    waitForPageLoad();
    
    console.log('      - active nav is '+section+'\n')
    verifyXpath("//nav//p[text()='"+section+"']");

    console.log('      - click home link\n')
    clickXpath("//nav//a[@href='/' and text()='Styled Starter']");

    console.log('      - active nav is home');
    shouldNotFindXpath("//nav//p[text()='"+section+"']");
    verifyXpath("//nav//p[text()='Styled Starter']");
}

function verifyDesignCenterNav(navText, section) {
    console.log('\n      - verify design center nav: '+section);

    clickXpath("//ul//li//a[text()='"+navText+"']")
    waitForPageLoad();
    verifyXpath("//h1[text()='"+section+"']");
}

function verifyDesignCenterSubsection(section) {
    console.log('\n      - verify design center nav: '+section);

    clickXpath("//ul//li//ul//li//a[text()='"+section+"']")
    waitForPageLoad();
    verifyXpath("//h1[text()='"+section+"']");
}

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