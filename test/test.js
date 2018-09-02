var assert = require("assert"),
    webdriver = require("selenium-webdriver"),
    utils = require('./utils'),
    shouldNotFind = utils.shouldNotFindXpath,
    verifyXpath = utils.verifyXpath,
    clickXpath = utils.clickXpath,
    selectOption = utils.selectOption,
    waitForPageLoad = utils.waitForPageLoad,
    setInputValue = utils.setInputValue,
    By = webdriver.By,
    until = webdriver.until;


describe('styled starter', function() {
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
        this.driver.get('http://localhost:3000/design#Introduction');
        waitForPageLoad(this.driver);

        console.log('      - default section is Introduction');
        verifyXpath(this.driver, "//h1[text()='Introduction']");

        verifyDocsNav(this.driver, 'Theme');
        verifyDocsNav(this.driver, 'Color');
        verifyDocsNav(this.driver, 'Typography');
        verifyDocsNav(this.driver, 'Layout');
        return verifyDocsNav(this.driver, 'Introduction');
    });

    it('can navigate components pages', function() {
        this.driver.get('http://localhost:3000/components#Introduction');
        waitForPageLoad(this.driver);

        console.log('      - default section is Introduction');
        verifyXpath(this.driver, "//h1[text()='Introduction']");

        verifyDocsNav(this.driver, 'Buttons');
        verifyDocsNav(this.driver, 'Cards');
        verifyDocsNav(this.driver, 'Forms');
        verifyDocsNav(this.driver, 'Libraries');
        return verifyDocsNav(this.driver, 'Introduction');
    });


    it('can choose theme', function() {
        verifyXpath(this.driver, "//*[@id='currentTheme' and text()='Default Theme']");
        verifyXpath(this.driver, "//header[@class='sc-htpNat bSPaLj']");
        clickXpath(this.driver, "//button[text()='choose theme']");
        this.driver.sleep(1000);
        selectOption(this.driver, "selectTheme", "Orchid");
        console.log('      - choose new theme');
        verifyXpath(this.driver, "//*[@id='currentTheme' and text()='Orchid']");
        verifyXpath(this.driver, "//header[@class='sc-htpNat gCmTCS']");
        verifyXpath(this.driver, "//h1[@class='sc-htpNat cySRgs']")
        console.log('      - styles applied');
        console.log('      - theme saved');
        this.driver.get('http://localhost:3000/design#/theme');
        waitForPageLoad(this.driver);
        verifyXpath(this.driver, "//*[@id='themeData']//*[contains(text(),'Quicksand')]");
        return verifyXpath(this.driver, "//*[@id='currentTheme' and text()='Orchid']");
    });

    it('can edit theme font', function() {
        this.driver.get('http://localhost:3000/design#Theme');
        waitForPageLoad(this.driver);
        verifyXpath(this.driver, "//*[@id='themeData']//*[contains(text(),'Nunito')]");
        verifyXpath(this.driver, "//div[@id='pageWrapper' and contains(@class,'gEcvDw')]");
        
        selectOption(this.driver, 'selectBrowserFont', 'Arial, sans-serif');

        console.log('      - select new browser font');
        shouldNotFind(this.driver, "//*[@id='themeData']//*[contains(text(),'Nunito')]");
        shouldNotFind(this.driver, "//div[@id='pageWrapper' and contains(@class,'gEcvDw')]");
        verifyXpath(this.driver, "//*[@id='themeData']//*[contains(text(),'Arial')]");
        console.log('      - font updated');
        verifyXpath(this.driver, "//div[@id='pageWrapper' and contains(@class,'dYrCOJ')]");

        console.log('      - select new web font');
        selectOption(this.driver, 'selectWebFont', 'Cabin');
        verifyXpath(this.driver, "//*[@id='themeData']//*[contains(text(),'Cabin')]");
        verifyXpath(this.driver, "//div[@id='pageWrapper' and contains(@class,'tQZCH')]");

        console.log('      - theme saved');
        clickXpath(this.driver, "//a[text()='About']");
        waitForPageLoad(this.driver);
        verifyXpath(this.driver, "//div[@id='pageWrapper' and contains(@class,'tQZCH')]");
        return verifyXpath(this.driver, "//*[@id='currentTheme' and text()='Custom']");
    });

    it('can edit theme color', function() {
        this.driver.get('http://localhost:3000/design#Theme');
        waitForPageLoad(this.driver);
        
        verifyXpath(this.driver, "//input[@value='base' and @readonly]");
        shouldNotFind(this.driver, "//input[@value='base' and @readonly]/..//*[text()='×']");
        console.log('      - base color not editable');

        verifyXpath(this.driver, "//*[@id='currentTheme' and text()='Default Theme']");

        verifyXpath(this.driver, "//input[@value='blue']");
        clickXpath(this.driver, "//*[text()='×' and @data-color='blue']");
        shouldNotFind(this.driver, "//input[@value='blue']");
        shouldNotFind(this.driver, "//*[text()='×' and @data-color='blue']");
        console.log('      - can delete colors');

        shouldNotFind(this.driver, "//*[@id='themeData']//*[text()='\"grey\"']");
        setInputValue(this.driver, 'input[value=gray]', 'grey');
        verifyXpath(this.driver, "//*[@id='themeData']//*[text()='\"grey\"']");
        verifyXpath(this.driver, "//*[@id='themeData']//*[text()='\"grey0\"']");
        verifyXpath(this.driver, "//*[@id='themeData']//*[text()='\"grey1\"']");
        verifyXpath(this.driver, "//*[@id='themeData']//*[text()='\"grey2\"']");
        verifyXpath(this.driver, "//*[@id='themeData']//*[text()='\"grey3\"']");
        verifyXpath(this.driver, "//*[@id='themeData']//*[text()='\"grey4\"']");
        verifyXpath(this.driver, "//*[@id='themeData']//*[text()='\"grey5\"']");
        verifyXpath(this.driver, "//*[@id='themeData']//*[text()='\"grey6\"']");
        verifyXpath(this.driver, "//*[@id='themeData']//*[text()='\"grey7\"']");
        verifyXpath(this.driver, "//*[@id='themeData']//*[text()='\"grey8\"']");
        verifyXpath(this.driver, "//*[@id='themeData']//*[text()='\"grey9\"']");
        console.log('      - can edit color name');

        shouldNotFind(this.driver, "//*[@id='themeData']//*[text()='\"#bababa\"']");
        setInputValue(this.driver, 'input[data-value=ADB4B9]', '#bababa');
        console.log('      - can edit color value');
        verifyXpath(this.driver, "//*[@id='themeData']//*[text()='\"#bababa\"']");

        console.log('      - theme saved');
        this.driver.get('http://localhost:3000/');
        return verifyXpath(this.driver, "//*[@id='currentTheme' and text()='Custom']");
    });

});

function verifyTopLevelNav(driver, section) {
    console.log('      - active nav is home');
    shouldNotFind(driver, "//nav//span[text()='"+section+"']");
    verifyXpath(driver, "//nav//span[text()='Styled Starter']");
    
    console.log('      - click '+section+' link');
    clickXpath(driver, "//nav//a[@href='/"+section.toLowerCase()+"' and text()='"+section+"']");
    waitForPageLoad(driver);
    
    console.log('      - active nav is '+section+'')
    verifyXpath(driver, "//nav//span[text()='"+section+"']");

    console.log('      - click home link');
    clickXpath(driver, "//nav//a[@href='/' and text()='Styled Starter']");

    console.log('      - active nav is home');
    shouldNotFind(driver, "//nav//span[text()='"+section+"']");
    return verifyXpath(driver, "//nav//span[text()='Styled Starter']");
}

function verifyDocsNav(driver, section) {
    console.log('      - verify design center nav: '+section);

    clickXpath(driver, "//ul//li//a[text()='"+section+"']")
    waitForPageLoad(driver);
    return verifyXpath(driver, "//h1[text()='"+section+"']");
}

