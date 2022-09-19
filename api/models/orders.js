const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  orderedItems: {
    type: [
      {
        id: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: String, required: true },
        amount: { type: String, required: true },
      },
    ],
  },
  user: {
    name: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
  },
});

module.exports = mongoose.model("Order", OrderSchema);
