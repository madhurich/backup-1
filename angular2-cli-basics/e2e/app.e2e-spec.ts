import { Angular2CliBasicsPage } from './app.po';

describe('angular2-cli-basics App', function() {
  let page: Angular2CliBasicsPage;

  beforeEach(() => {
    page = new Angular2CliBasicsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
