exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('order_items').del(),
    knex('items').del(),
    knex('orders').del(),
    knex('toppings').del(),
    knex('categories').del(),

    knex('categories').insert({id: 1, name: 'Pizza'}),
    knex('categories').insert({id: 2, name: 'Burger'}),
    knex('categories').insert({id: 3, name: 'Drinks'}),
    knex('categories').insert({id: 4, name: 'Wings'}),
    knex('categories').insert({id: 5, name: 'Salads'}),

    knex('toppings').insert({id: 1, name: 'Anchovies'}),
    knex('toppings').insert({id: 2, name: 'Bacon'}),
    knex('toppings').insert({id: 3, name: 'Ham'}),
    knex('toppings').insert({id: 4, name: 'Pepperoni'}),
    knex('toppings').insert({id: 5, name: 'Salami'}),
    knex('toppings').insert({id: 6, name: 'Sausage'}),
    knex('toppings').insert({id: 7, name: 'Chicken'}),
    knex('toppings').insert({id: 8, name: 'Broccoli'}),
    knex('toppings').insert({id: 9, name: 'Green Olives'}),
    knex('toppings').insert({id: 10, name: 'Black Olives'}),
    knex('toppings').insert({id: 11, name: 'Green Peppers'}),
    knex('toppings').insert({id: 12, name: 'Mushrooms'}),
    knex('toppings').insert({id: 13, name: 'Tomatoes'}),
    knex('toppings').insert({id: 14, name: 'Onions'}),
    knex('toppings').insert({id: 15, name: 'Spinach'}),
    knex('toppings').insert({id: 16, name: 'Feta Cheese'}),
    knex('toppings').insert({id: 17, name: 'Mozzarella'}),
    knex('toppings').insert({id: 18, name: 'Pestel'}),
    knex('toppings').insert({id: 19, name: 'Barbeque Sauce'}),
    knex('toppings').insert({id: 20, name: 'Garlic Sauce'}),
    knex('toppings').insert({id: 21, name: 'Tomato Sauce'}),

    knex('items').insert({id: 1,  name: 'Buffalo Chicken', category_id: 1, price: 12}),
    knex('items').insert({id: 2,  name: 'Chipotle Chicken', category_id: 1, price: 12}),
    knex('items').insert({id: 3,  name: 'Chipotle Steak', category_id: 1, price: 12}),
    knex('items').insert({id: 4,  name: 'Classic Super', category_id: 1, price: 12}),
    knex('items').insert({id: 5,  name: 'Garden Veggie', category_id: 1, price: 12}),
    knex('items').insert({id: 6,  name: 'Tropical Hawaiian', category_id: 1, price: 12}),
    knex('items').insert({id: 7,  name: 'Pepperoni', category_id: 1, price: 12}),
    knex('items').insert({id: 8,  name: 'Cheese', category_id: 1, price: 12}),
    knex('items').insert({id: 9,  name: 'Hot and Spicy', category_id: 1, price: 12}),
    knex('items').insert({id: 10, name: 'Sweet Heat', category_id: 1, price: 12}),
    knex('items').insert({id: 11, name: 'Chicken', category_id: 2, price: 7}),
    knex('items').insert({id: 12, name: 'Cheese', category_id: 2, price: 7}),
    knex('items').insert({id: 13, name: 'Ham', category_id: 2, price: 7}),
    knex('items').insert({id: 14, name: 'Veggie', category_id: 2, price: 7}),
    knex('items').insert({id: 15, name: 'Coca cola', category_id: 3, price: 2}),
    knex('items').insert({id: 16, name: 'Sprite', category_id: 3, price: 2}),
    knex('items').insert({id: 17, name: 'Iced tea', category_id: 3, price: 2}),
    knex('items').insert({id: 18, name: 'Cold Coffee', category_id: 3, price: 2}),
    knex('items').insert({id: 19, name: 'Orange Juice', category_id: 3, price: 2}),
    knex('items').insert({id: 20, name: 'Ginger Ale', category_id: 3, price: 2}),
    knex('items').insert({id: 21, name: 'Gatorade', category_id: 3, price: 2}),
    knex('items').insert({id: 22, name: 'Spicy Wings', category_id: 4, price: 10}),
    knex('items').insert({id: 23, name: 'Buffalo Wings', category_id: 4, price: 10}),
    knex('items').insert({id: 24, name: 'Barbeque Wings', category_id: 4, price: 10}),
    knex('items').insert({id: 25, name: 'Chipotle Wings', category_id: 4, price: 10}),
    knex('items').insert({id: 26, name: 'Orange Glazed Wings', category_id: 4, price: 10}),
    knex('items').insert({id: 27, name: 'Ceasar', category_id: 5, price: 8}),
    knex('items').insert({id: 28, name: 'Garden', category_id: 5, price: 8}),
    knex('items').insert({id: 29, name: 'Summer', category_id: 5, price: 8}),
    knex('items').insert({id: 30, name: 'Greek', category_id: 5, price: 8}),

    knex('orders').insert({id: 34567890}),
    knex('orders').insert({id: 75968221}),
    knex('orders').insert({id: 58951263}),
    knex('orders').insert({id: 54789512}),
    knex('orders').insert({id: 78562221}),

    knex('order_items').insert({id: 1,  order_id: 34567890, item_id: 1}),
    knex('order_items').insert({id: 2,  order_id: 34567890, item_id: 2}),
    knex('order_items').insert({id: 3,  order_id: 34567890, item_id: 11}),
    knex('order_items').insert({id: 4,  order_id: 34567890, item_id: 15}),
    knex('order_items').insert({id: 5,  order_id: 75968221, item_id: 1}),
    knex('order_items').insert({id: 6,  order_id: 75968221, item_id: 14}),
    knex('order_items').insert({id: 7,  order_id: 75968221, item_id: 16}),
    knex('order_items').insert({id: 8,  order_id: 58951263, item_id: 1}),
    knex('order_items').insert({id: 9,  order_id: 58951263, item_id: 7}),
    knex('order_items').insert({id: 10, order_id: 58951263, item_id: 8}),
    knex('order_items').insert({id: 11, order_id: 58951263, item_id: 22}),
    knex('order_items').insert({id: 12, order_id: 58951263, item_id: 23}),
    knex('order_items').insert({id: 13, order_id: 58951263, item_id: 16}),
    knex('order_items').insert({id: 14, order_id: 58951263, item_id: 17}),
    knex('order_items').insert({id: 15, order_id: 58951263, item_id: 28}),
    knex('order_items').insert({id: 16, order_id: 54789512, item_id: 2}),
    knex('order_items').insert({id: 17, order_id: 54789512, item_id: 3}),
    knex('order_items').insert({id: 18, order_id: 54789512, item_id: 11}),
    knex('order_items').insert({id: 19, order_id: 54789512, item_id: 14}),
    knex('order_items').insert({id: 20, order_id: 54789512, item_id: 19}),
    knex('order_items').insert({id: 21, order_id: 54789512, item_id: 19}),
    knex('order_items').insert({id: 22, order_id: 78562221, item_id: 6}),
    knex('order_items').insert({id: 23, order_id: 78562221, item_id: 11}),
    knex('order_items').insert({id: 24, order_id: 78562221, item_id: 17}),
    knex('order_items').insert({id: 25, order_id: 78562221, item_id: 24})

  ]);
};
