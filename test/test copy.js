var assert = require("assert"),
    webdriver = require("selenium-webdriver"),
    By = webdriver.By,
    until = webdriver.until;


describe("testing styled starter project", function() {
    this.timeout(10000);

    beforeEach(function() {
        if (process.env.SAUCE_USERNAME != undefined) {
            this.driver = new webdriver.Builder()
                .usingServer('http://'+ process.env.SAUCE_USERNAME+':'+process.env.SAUCE_ACCESS_KEY+'@ondemand.saucelabs.com:80/wd/hub')
                .withCapabilities({
                    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
                    build: process.env.TRAVIS_BUILD_NUMBER,
                    username: process.env.SAUCE_USERNAME,
                    accessKey: process.env.SAUCE_ACCESS_KEY,
                    browserName: "chrome"
                }).build();
        } else {
            this.driver = new webdriver.Builder()
                .withCapabilities({
                browserName: "chrome"
            }).build();
        }

        return this.driver.get("http://localhost:3000");
    });

    afterEach(function() {
        console.log('after');
        return this.driver.quit();
    });

    it('can navigate top level nav - About', function() {
        return verifyTopLevelNav(this.driver, 'About');
    });

    it('can navigate top level - Design', function() {
        return verifyTopLevelNav(this.driver, 'Design');
    });

    // it('can navigate design pages', function() {
    //     driver.get('http://localhost:3000/design#/');
    //     waitForPageLoad(this.driver);

    //     console.log('\n      - default section is Introduction');
    //     verifyXpath(this.driver, "//h1[text()='Introduction']");

    //     verifyDesignCenterNav('Color', 'Color');
    //     verifyDesignCenterNav('Typography', 'Font');
    //     verifyDesignCenterNav('Layout', 'Layout');
    //     verifyDesignCenterNav('Components','Overview');
    //     verifyDesignCenterNav('Introduction','Introduction');
    // });

    // it('can navigate design typography subsections', function() {
    //     driver.get('http://localhost:3000/design#/font');
    //     waitForPageLoad(this.driver);

    //     console.log('\n      - default section is Font');
    //     verifyXpath(this.driver, "//h1[text()='Font']");

    //     verifyDesignCenterSubsection('Type Scale');
    //     verifyDesignCenterSubsection('Text Elements');
    //     verifyDesignCenterSubsection('Headings');
    //     verifyDesignCenterSubsection('Paragraph');
    //     verifyDesignCenterSubsection('Lists');
    //     verifyDesignCenterSubsection('Font');
    // });

    // it('can navigate design components subsections', function() {
    //     driver.get('http://localhost:3000/design#/overview');
    //     waitForPageLoad(this.driver);

    //     console.log('\n      - default section is Overview');
    //     verifyXpath(this.driver, "//h1[text()='Overview']");

    //     verifyDesignCenterSubsection('Buttons');
    //     verifyDesignCenterSubsection('Cards');
    //     verifyDesignCenterSubsection('Forms');
    //     verifyDesignCenterSubsection('Overview');
    // });
});

function verifyTopLevelNav(driver, section) {
    driver.get('http://localhost:3000/');
    waitForPageLoad(driver);

    console.log('\n      - active nav is home');
    shouldNotFindXpath(driver, "//nav//p[text()='"+section+"']");
    verifyXpath(driver, "//nav//p[text()='Styled Starter']");
    
    console.log('      - click '+section+' link\n')
    clickXpath(driver, "//nav//a[@href='/"+section.toLowerCase()+"' and text()='"+section+"']");
    waitForPageLoad(driver);
    
    console.log('      - active nav is '+section+'\n')
    verifyXpath(driver, "//nav//p[text()='"+section+"']");

    console.log('      - click home link\n')
    clickXpath(driver, "//nav//a[@href='/' and text()='Styled Starter']");

    console.log('      - active nav is home');
    shouldNotFindXpath(driver, "//nav//p[text()='"+section+"']");
    return verifyXpath(driver, "//nav//p[text()='Styled Starter']");
}

function verifyDesignCenterNav(navText, section) {
    console.log('\n      - verify design center nav: '+section);

    clickXpath(this.driver, "//ul//li//a[text()='"+navText+"']")
    waitForPageLoad(this.driver);
    return verifyXpath(this.driver, "//h1[text()='"+section+"']");
}

function verifyDesignCenterSubsection(section) {
    console.log('\n      - verify design center nav: '+section);

    clickXpath(this.driver, "//ul//li//ul//li//a[text()='"+section+"']")
    waitForPageLoad(this.driver);
    return verifyXpath(this.driver, "//h1[text()='"+section+"']");
}

function shouldNotFindXpath(driver, xpath) {
    return driver.findElements(By.xpath(xpath)).then(function(elements) {
        assert.equal(0,elements.length);
    });
}

function verifyXpath(driver, xpath) {
    return driver.wait(function() {
        return driver.findElements(By.xpath(xpath)).then(function(elements) {
            return elements[0];
        });
    }, 4000, 'Failed to find '+xpath+' after 4 seconds');
}

function clickXpath(driver, xpath) {
    return driver.wait(function() {
        return driver.findElement(By.xpath(xpath)).then(function(element) {
            console.log('click xpath: '+xpath)
            driver.findElement(By.xpath(xpath)).click();
            return element;
        });
    }, 4000, 'Failed to find '+xpath+' after 4 seconds');
}

function waitForPageLoad(driver) {
    // Make sure new page init has started...
    return driver.executeScript('return document.readyState').then(function(readyState) {
        if (readyState != 'complete') {
            driver.executeScript('window.stop();');
            driver.sleep(500);
            waitForPageLoad(driver);
        } 
    });
}
