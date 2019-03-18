import { MiAppPage } from './app.po';

describe('mi-app App', function() {
  let page: MiAppPage;

  beforeEach(() => {
    page = new MiAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
