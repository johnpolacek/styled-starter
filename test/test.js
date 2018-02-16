var assert = require("assert"),
    webdriver = require("selenium-webdriver"),
    utils = require('./utils'),
    shouldNotFindXpath = utils.shouldNotFindXpath,
    verifyXpath = utils.verifyXpath,
    clickXpath = utils.clickXpath,
    waitForPageLoad = utils.waitForPageLoad,
    By = webdriver.By,
    until = webdriver.until;


describe("testing styled starter project", function() {
    this.timeout(20000);

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
        this.driver.get("http://localhost:3000");
        return waitForPageLoad(this.driver);
    });

    afterEach(function() {
        return this.driver.quit();
    });

    it('can navigate top level page - About', function() {
        return verifyTopLevelNav(this.driver, 'About');
    });

    it('can navigate top level page - Design', function() {
        return verifyTopLevelNav(this.driver, 'Design');
    });

    it('can navigate design pages', function() {
        this.driver.get('http://localhost:3000/design#/');
        waitForPageLoad(this.driver);

        console.log('      - default section is Introduction');
        verifyXpath(this.driver, "//h1[text()='Introduction']");

        verifyDesignCenterNav(this.driver, 'Color', 'Color');
        verifyDesignCenterNav(this.driver, 'Typography', 'Font');
        verifyDesignCenterNav(this.driver, 'Layout', 'Layout');
        verifyDesignCenterNav(this.driver, 'Components','Overview');
        return verifyDesignCenterNav(this.driver, 'Introduction','Introduction');
    });

    it('can navigate design typography subsections', function() {
        this.driver.get('http://localhost:3000/design#/font');
        waitForPageLoad(this.driver);

        console.log('      - default section is Font');
        verifyXpath(this.driver, "//h1[text()='Font']");

        verifyDesignCenterSubsection(this.driver, 'Type Scale');
        verifyDesignCenterSubsection(this.driver, 'Text Elements');
        verifyDesignCenterSubsection(this.driver, 'Headings');
        verifyDesignCenterSubsection(this.driver, 'Paragraph');
        verifyDesignCenterSubsection(this.driver, 'Lists');
        return verifyDesignCenterSubsection(this.driver, 'Font');
    });

    it('can navigate design components subsections', function() {
        this.driver.get('http://localhost:3000/design#/overview');
        waitForPageLoad(this.driver);

        console.log('      - default section is Overview');
        verifyXpath(this.driver, "//h1[text()='Overview']");

        verifyDesignCenterSubsection(this.driver, 'Buttons');
        verifyDesignCenterSubsection(this.driver, 'Cards');
        verifyDesignCenterSubsection(this.driver, 'Forms');
        return verifyDesignCenterSubsection(this.driver, 'Overview');
    });
});

function verifyTopLevelNav(driver, section) {
    console.log('      - active nav is home');
    shouldNotFindXpath(driver, "//nav//p[text()='"+section+"']");
    verifyXpath(driver, "//nav//p[text()='Styled Starter']");
    
    console.log('      - click '+section+' link');
    clickXpath(driver, "//nav//a[@href='/"+section.toLowerCase()+"' and text()='"+section+"']");
    waitForPageLoad(driver);

    driver.sleep(10000);
    
    console.log('      - active nav is '+section+'')
    verifyXpath(driver, "//nav//p[text()='"+section+"']");

    console.log('      - click home link');
    clickXpath(driver, "//nav//a[@href='/' and text()='Styled Starter']");

    console.log('      - active nav is home');
    shouldNotFindXpath(driver, "//nav//p[text()='"+section+"']");
    return verifyXpath(driver, "//nav//p[text()='Styled Starter']");
}

function verifyDesignCenterNav(driver, navText, section) {
    console.log('      - verify design center nav: '+section);

    clickXpath(driver, "//ul//li//a[text()='"+navText+"']")
    waitForPageLoad(driver);
    return verifyXpath(driver, "//h1[text()='"+section+"']");
}

function verifyDesignCenterSubsection(driver, section) {
    console.log('      - verify design center nav: '+section);

    clickXpath(driver, "//ul//li//ul//li//a[text()='"+section+"']");
    waitForPageLoad(driver);
    return verifyXpath(driver, "//h1[text()='"+section+"']");
}