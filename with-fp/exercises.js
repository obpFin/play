// Amazon shopping
const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: [],
  addItem(name, price) {
    this.cart.push({ name, price });
  },
  addTaxToItem(item) {
    return {name: item.name, price: item.price * 1.3}
  },
  buyItem(item) {
    this.purchases.push(item)
  },
  emptyCart() {
    this.cart = []
  }
};

//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

//Bonus:
// accept refunds.
// Track user history.
