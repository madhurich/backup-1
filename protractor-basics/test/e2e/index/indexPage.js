function IndexPage(){
    this.button = element(by.id('btn'));
    this.text = element(by.binding('text'));
    this.getBoundText = function(){
        return this.text.getText();
    }

    this.loadPage = function(){
        browser.get('/');
    }

    this.getPageTitle = function(){
        return browser.getTitle();
    }

    this.clickButton = function(){
        this.button.click();
    }
}

module.exports = IndexPage;