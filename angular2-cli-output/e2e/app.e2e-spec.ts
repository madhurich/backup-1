import { Angular2CliOutputPage } from './app.po';

describe('angular2-cli-output App', function() {
  let page: Angular2CliOutputPage;

  beforeEach(() => {
    page = new Angular2CliOutputPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
