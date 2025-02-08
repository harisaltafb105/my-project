// schemas/cartItem.js
export default {
    name: 'cartItem',
    title: 'Cart Item',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Item Name',
        type: 'string',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'quantity',
        title: 'Quantity',
        type: 'number',
      },
    ],
  };
  