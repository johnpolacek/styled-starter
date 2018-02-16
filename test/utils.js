var assert = require("assert"),
    webdriver = require("selenium-webdriver"),
    By = webdriver.By,
    until = webdriver.until;

module.exports = {
    shouldNotFindXpath: function(driver, xpath) {
        return driver.findElements(By.xpath(xpath)).then(function(elements) {
            assert.equal(0,elements.length);
        });
    },
    verifyXpath: function(driver, xpath) {
        return driver.wait(function() {
            return driver.findElements(By.xpath(xpath)).then(function(elements) {
                return elements[0];
            });
        }, 4000, 'Failed to find '+xpath+' after 4 seconds');
    },
    clickXpath: function(driver, xpath) {
        return driver.wait(function() {
            return driver.findElement(By.xpath(xpath)).then(function(element) {
                driver.findElement(By.xpath(xpath)).click();
                return element;
            });
        }, 4000, 'Failed to find '+xpath+' after 4 seconds');
    },
    waitForPageLoad: function(driver) {
        driver.sleep(500);
        // Make sure new page init has started...
        return driver.executeScript('return document.readyState').then(function(readyState) {
            if (readyState != 'complete') {
                driver.executeScript('window.stop();');
                driver.sleep(500);
                waitForPageLoad(driver);
            } 
        });
    }
}
