const BasePage = require('./BasePage');

class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);
    this.firstNameInput = '#first-name';
    this.lastNameInput = '#last-name';
    this.zipCodeInput = '#postal-code';
    this.continueButton = '#continue';
    this.finishButton = '#finish';
    this.completeHeader = '.complete-header';
  }

  async fillShippingInfo(firstName, lastName, zipCode) {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.fill(this.zipCodeInput, zipCode);
  }

  async completePurchase() {
    await this.page.click(this.continueButton);
    await this.page.click(this.finishButton);
  }

  async getSuccessMessage() {
    return this.page.textContent(this.completeHeader);
  }
}

module.exports = CheckoutPage;