import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    stock: {
      type: Number,
      required: [true, "Stock quantity is required"],
    },
    category: {
      type: mongoose.schema.Type.ObjectId,
      Ref: category, // it is the link of category model
      required: true,
    },
    imageUrl: {
      type: [String],
      validate: {
        validator: function (v) {
          return v.length <= 4;
        },
        message: "You can upload a maximum of 4 images",
      },
      required: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", ProductSchema);
