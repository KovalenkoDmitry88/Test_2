class BasePage {
    constructor(page) {
      this.page = page;
    }
  
async navigate(path) {
  const baseUrl = process.env.BASE_URL || 'https://www.saucedemo.com';
  await this.page.goto(`${baseUrl}${path}`);
}
  }
  
  module.exports = BasePage;  