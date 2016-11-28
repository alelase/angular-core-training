import { AngularCoreTrainingPage } from './app.po';

describe('angular-core-training App', function() {
  let page: AngularCoreTrainingPage;

  beforeEach(() => {
    page = new AngularCoreTrainingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
