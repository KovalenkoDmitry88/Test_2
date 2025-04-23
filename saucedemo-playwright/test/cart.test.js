const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');

test.describe('Cart Tests', () => {
    let loginPage, inventoryPage, cartPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    
    await loginPage.navigate('/');
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('Add item to cart', async () => {
    await inventoryPage.addFirstItemToCart();
    const cartCount = await inventoryPage.getCartItemsCount();
    expect(cartCount).toBe('1');
  });

  test('Remove item from cart', async () => {
    // Add item first
    await inventoryPage.addFirstItemToCart();
    
    // Go to cart and remove
    await inventoryPage.goToCart();
    await cartPage.removeFirstItem();
    
    const itemsCount = await cartPage.getItemsCount();
    expect(itemsCount).toBe(0);
  });
});