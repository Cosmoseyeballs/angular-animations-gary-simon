import { AngularAnimationsGarySimonPage } from './app.po';

describe('angular-animations-gary-simon App', () => {
  let page: AngularAnimationsGarySimonPage;

  beforeEach(() => {
    page = new AngularAnimationsGarySimonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
