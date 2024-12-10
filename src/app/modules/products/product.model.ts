import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";

const productSchema = new Schema<TProduct>({
  name: { type: String, require: true },
  brand: { type: String, require: true },
  price: { type: Number, require: true },
  category: {
    type: String,
    enum: [
      "Writing",
      "Office Supplies",
      "Art Supplies",
      "Educational",
      "Technology",
    ],
    require: true,
  },
  description: { type: String, require: true },
  quantity: { type: Number, require: true },
  inStock: { type: Boolean, require: true },
});

export const ProductModel = model<TProduct>("Product", productSchema);
