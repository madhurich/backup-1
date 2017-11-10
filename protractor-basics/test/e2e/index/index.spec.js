var IndexPage = require('./indexPage');
describe('learning protractor', function(){
    //var ptor = protractor.getInstance();
    var page = new IndexPage();
    beforeEach(function(){
        page.loadPage();
    });
    describe('index', function(){
        it('should say hello', function(){
            expect(page.getPageTitle()).toBe('Learning protractor');
        });

        it('should replace the text', function(){
           
            page.clickButton();//executes click action 
            expect(page.getBoundText()).toBe('mad');
        });
    });
});