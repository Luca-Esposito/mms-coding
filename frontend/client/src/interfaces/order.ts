import { Base } from "./base";
import { State } from "./state";
import { Customer } from "./customer";
import { LineItem } from "./lineItem";
import { Employee } from "./employee";

export interface Order extends Base {
  currentState: State;
  customer: Customer;
  lineItems: LineItem[];
  employee?: Employee;
}
