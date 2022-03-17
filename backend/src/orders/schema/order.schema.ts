import { Schema } from 'mongoose';
import { Order } from '../interface/order.interface';
import { LineItemSchema } from '../../line-items/schema/line-item.schema';
import { StateHistorySchema } from './stateHistory.schema';

export enum OrderStates {
  'OPEN',
  'IN_PROGRESS',
  'COMPLETE',
}

export const OrderSchema = new Schema<Order>(
  {
    currentState: Number,
    customerId: String,
    lineItems: [LineItemSchema],
    employeeId: String,
    stateHistory: [StateHistorySchema],
  },
  { timestamps: true },
);
