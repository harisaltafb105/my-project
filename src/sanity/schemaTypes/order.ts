// schemas/order.js

// schemas/order.js
// export default {
//     name: 'order',
//     title: 'Order',
//     type: 'document',
//     fields: [
//       {
//         name: 'firstName',
//         title: 'First Name',
//         type: 'string',
//       },
//       {
//         name: 'lastName',
//         title: 'Last Name',
//         type: 'string',
//       },
//       {
//         name: 'address',
//         title: 'Address',
//         type: 'string',
//       },
//       {
//         name: 'city',
//         title: 'City',
//         type: 'string',
//       },
//       {
//         name: 'postalCode',
//         title: 'Postal Code',
//         type: 'string',
//       },
//       {
//         name: 'country',
//         title: 'Country',
//         type: 'string',
//       },
//       {
//         name: 'cartItems',
//         title: 'Cart Items',
//         type: 'array',
//         of: [
//           {
//             type: 'reference',
//             to: [{ type: 'cartItem' }], // Referencing cartItem schema here
//           },
//         ],
//       },
//       {
//         name: 'totalAmount',
//         title: 'Total Amount',
//         type: 'number',
//       },
//       {
//         name: 'paymentStatus',
//         title: 'Payment Status',
//         type: 'string',
//         options: {
//           list: ['pending', 'paid'], // Example payment statuses
//           layout: 'radio',
//         },
//       },
//     ],
//   };
export default {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "orderId",
      title: "Order ID",
      type: "string",
    },
    {
      name: "firstName",
      title: "First Name",
      type: "string",
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "city",
      title: "City",
      type: "string",
    },
    {
      name: "postalCode",
      title: "Postal Code",
      type: "string",
    },
    {
      name: "country",
      title: "Country",
      type: "string",
    },
    {
      name: "cartItems",
      title: "Cart Items",
      type: "array",
      of: [{ type: "reference", to: [{ type: "cartItem" }] }],
    },
    {
      name: "totalAmount",
      title: "Total Amount",
      type: "number",
    },
    {
      name: "paymentStatus",
      title: "Payment Status",
      type: "string",
      options: {
        list: ["pending", "paid"],
        layout: "radio",
      },
    },
    {
      name: "status",
      title: "Order Status",
      type: "string",
      options: {
        list: ["pending", "shipped", "delivered"],
        layout: "radio",
      },
    },
    {
      name: "estimatedDelivery",
      title: "Estimated Delivery",
      type: "string",
    },
  ],
};
