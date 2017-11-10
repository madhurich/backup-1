import { UsersFollowersPage } from './app.po';

describe('users-followers App', function() {
  let page: UsersFollowersPage;

  beforeEach(() => {
    page = new UsersFollowersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
