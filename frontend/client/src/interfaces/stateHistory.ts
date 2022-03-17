export interface StateHistory {
  _id: string;
  state: string;
  employeeId?: string | null;
  updatedAt: number;
}
