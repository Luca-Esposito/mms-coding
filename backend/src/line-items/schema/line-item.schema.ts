import { Schema } from 'mongoose';

import { LineItem } from '../interface/lineItem.interface';

export const LineItemSchema = new Schema<LineItem>(
  {
    name: String,
    sku: String,
  },
  { timestamps: true },
);
