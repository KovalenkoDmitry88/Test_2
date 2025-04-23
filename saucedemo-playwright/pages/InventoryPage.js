const BasePage = require('./BasePage');

class InventoryPage extends BasePage {
  constructor(page) {
    super(page);
    this.addToCartButton = 'button:has-text("Add to cart")';
    this.cartBadge = '.shopping_cart_badge';
    this.cartLink = '.shopping_cart_link';
    this.itemName = '.inventory_item_name';
  }

  async addFirstItemToCart() {
    await this.page.click(this.addToCartButton);
  }

  async getCartItemsCount() {
    return this.page.textContent(this.cartBadge).catch(() => '0');
  }

  async goToCart() {
    await this.page.click(this.cartLink);
  }
}

module.exports = InventoryPage;