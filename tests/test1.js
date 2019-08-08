module.exports = {
    'Demo test DuckDuckGo search' : function (browser) {
      browser
        .url('https://duckduckgo.com/')
        .pause(2000)
    .waitForElementVisible('body',1000)
    .pause(4000)
    .waitForElementVisible('#search_form_input_homepage',1000)
    .pause(2000)
        .click('#search_form_input_homepage')
        .pause(2000)
        .keys('nightwatch js')
       .waitForElementVisible('#search_button_homepage', 1000)
       .click('#search_button_homepage')
       .pause(2000)
       .assert.containsText('#web_content_wrapper', 'Nightwatch.js')
        .saveScreenshot('./output/search.png')
        .end();
    }
};