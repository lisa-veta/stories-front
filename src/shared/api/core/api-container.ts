import { ContentManagerFactory } from './content-manager-factory';

class ApiContainer {
  private factory: ContentManagerFactory;

  constructor() {
    this.factory = new ContentManagerFactory();
  }

  setAuthToken(token: string): void {
    localStorage.setItem('auth-token', token);
  }

  clearAuthToken(): void {
    localStorage.removeItem('auth-token');
  }

  get stories() {
    return this.factory.createStoriesManager();
  }

  get banners() {
    return this.factory.createBannersManager();
  }

  get runningLines() {
    return this.factory.createRunningLinesManager();
  }

  get stocks() {
    return this.factory.createStocksManager();
  }

  get bottomSheets() {
    return this.factory.createBottomSheetsManager();
  }

  get onboardingStories() {
    return this.factory.createOnboardingStoriesManager();
  }
}

export const apiContainer = new ApiContainer();
