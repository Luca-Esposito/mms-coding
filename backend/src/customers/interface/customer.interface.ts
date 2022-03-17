import { Document } from 'mongoose';

export interface Customer extends Document {
  readonly name: string;
  readonly firstName: string;
}
