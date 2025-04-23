const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');

test.describe('Checkout Tests', () => {
  let loginPage, inventoryPage, cartPage, checkoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
    
    await loginPage.navigate('/');
    await loginPage.login('standard_user', 'secret_sauce');
    
    // Prepare for checkout
    await inventoryPage.addFirstItemToCart();
    const cartCount = await inventoryPage.getCartItemsCount();
    expect(cartCount).toBe('1');
    await inventoryPage.goToCart();
    await cartPage.proceedToCheckout();
  });

  test('Complete purchase', async () => {
    await checkoutPage.fillShippingInfo('Din', 'Don', '123');
    await checkoutPage.completePurchase();
    
    const successMessage = await checkoutPage.getSuccessMessage();
    expect(successMessage).toContain('Thank you for your order');
  });
});