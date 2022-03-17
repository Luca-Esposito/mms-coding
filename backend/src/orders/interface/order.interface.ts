import { Document } from 'mongoose';
import { LineItem } from '../../line-items/interface/lineItem.interface';
import { StateHistory } from './stateHistory.interface';

export interface Order extends Document {
  readonly currentState: string;
  readonly customerId: string;
  readonly lineItems: LineItem[];
  readonly employeeId?: string | null;
  stateHistory?: StateHistory[];
  readonly createdAt: number;
  readonly updatedAt?: number;
}
