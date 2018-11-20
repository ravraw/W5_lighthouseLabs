// create a Pizza class
class Pizza {
  constructor(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = ['cheese'];
  }
  pizzaDescription() {
    console.log(`"${this.size} ${this.crust} pizza with ${this.toppings}"`);
  }
  addTopping(topping) {
    this.toppings.push(topping);
  }
}

const pizza1 = new Pizza('medium', 'thin crust');
pizza1.addTopping('bacon');
pizza1.addTopping('peppers');
//console.log('pizza1 toppings :', pizza1.toppings);
pizza1.pizzaDescription();

const pizza2 = new Pizza('small', 'pan pizza');
pizza2.addTopping('pineapple');
pizza2.addTopping('sundried tomatoes');
//console.log('pizza2 toppings :', pizza2.toppings);
pizza2.pizzaDescription();
