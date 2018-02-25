var assert = require("assert"),
    webdriver = require("selenium-webdriver"),
    By = webdriver.By,
    Select =  webdriver.select,
    until = webdriver.until;

function verifyXpath(driver, xpath) {
    return driver.wait(function() {
        return driver.findElements(By.xpath(xpath)).then(function(elements) {
            return elements[0];
        });
    }, 4000, 'Failed to find '+xpath+' after 4 seconds');
}

module.exports = {
    shouldNotFindXpath: function(driver, xpath) {
        
        return driver.findElements(By.xpath(xpath)).then(function(elements) {
            if (elements.length !== 0) {
                console.error('shouldNotFindXpath '+xpath);
            }
            assert.equal(0,elements.length);
        });
    },
    verifyXpath: verifyXpath,
    clickXpath: function(driver, xpath) {
        return driver.wait(function() {
            return driver.findElement(By.xpath(xpath)).then(function(element) {
                driver.findElement(By.xpath(xpath)).click();
                return element;
            });
        }, 4000, 'Failed to find '+xpath+' after 4 seconds');
    },
    findByXpath(driver, xpath) {
        return driver.findElements(By.xpath(xpath)).then(function(elements) {
            return elements[0];
        });
    },
    setInputValue(driver, selector, value) {
        return driver.executeScript('var input = document.querySelector("'+selector+'");input.value = "'+value+'";input.dispatchEvent(new Event("change", { bubbles: true }));input.dispatchEvent(new Event("blur", { bubbles: true }));');
    },
    selectOption(driver, selectId, val) {
        verifyXpath(driver, "//select[@id='"+selectId+"']");
        return driver.executeScript(''+
            'var select = document.getElementById("'+selectId+'");'+
            'for (var opt, i = 0; opt = select.options[i]; i++) {'+
            '    if (opt.value == "'+val+'") {'+
            '        select.selectedIndex = i;'+
            '        break;'+
            '    }'+
            '}'+
            'select.dispatchEvent(new Event("change", { bubbles: true }));'
        );
    },
    waitForPageLoad: function(driver) {
        driver.sleep(500);
        // Make sure new page init has started...
        return driver.executeScript('return document.readyState').then(function(readyState) {
            if (readyState != 'complete') {
                driver.sleep(1000);
                driver.executeScript('window.stop();');
                waitForPageLoad(driver);
            } 
        });
    }
}
