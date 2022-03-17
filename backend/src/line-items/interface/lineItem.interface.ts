import { Document } from 'mongoose';

export interface LineItem extends Document {
  readonly name: string;
  readonly sku: string;
}
