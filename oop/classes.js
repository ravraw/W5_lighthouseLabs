// create a Pizza class
class Pizza {
  constructor(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = ['cheese'];
  }

  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + this.toppings.length * toppingPrice;
  }

  set size(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this.size = size;
    }
  }
  pizzaDescription() {
    console.log(`"${this.size} ${this.crust} pizza with ${this.toppings}"`);
  }
  addTopping(topping) {
    this.toppings.push(topping);
  }
}

const pizza1 = new Pizza('medium', 'thin crust');
//pizza1.size = 's';
pizza1.addTopping('bacon');
pizza1.addTopping('peppers');
//console.log('pizza1 toppings :', pizza1.toppings);
pizza1.pizzaDescription();

const pizza2 = new Pizza('small', 'pan pizza');
pizza2.addTopping('pineapple');
pizza2.addTopping('sundried tomatoes');
//console.log('pizza2 toppings :', pizza2.toppings);
pizza2.pizzaDescription();
