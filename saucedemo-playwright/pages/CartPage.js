const BasePage = require('./BasePage');

class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.cartItem = '.cart_item';
    this.removeButton = 'button:has-text("Remove")';
    this.checkoutButton = '#checkout';
  }

  async removeFirstItem() {
    await this.page.click(this.removeButton);
  }

  async getItemsCount() {
    return (await this.page.$$(this.cartItem)).length;
  }

  async proceedToCheckout() {
    await this.page.click(this.checkoutButton);
  }
}

module.exports = CartPage;