import { Document } from 'mongoose';

export interface StateHistory extends Document {
  readonly state: string;
  readonly employeeId?: string | null;
  readonly updatedAt: number;
}
