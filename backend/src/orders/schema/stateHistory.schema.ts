import { Schema } from 'mongoose';
import { StateHistory } from '../interface/stateHistory.interface';

export const StateHistorySchema = new Schema<StateHistory>({
  state: Number,
  employeeId: String,
  updatedAt: Date,
});
