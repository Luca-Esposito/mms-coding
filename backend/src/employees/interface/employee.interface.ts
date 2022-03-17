import { Document } from 'mongoose';

export interface Employee extends Document {
  readonly name: string;
  readonly firstName: string;
}
