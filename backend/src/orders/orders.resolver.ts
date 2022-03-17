import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { OrderType } from './dto/order.dto';
import { OrdersService } from './orders.service';
import { OrderInput } from './order.input';
import { Order } from './interface/order.interface';
import { EmployeesService } from '../employees/employees.service';
import { CustomersService } from '../customers/customers.service';
import { OrderStates } from './schema/order.schema';
import { StateHistory } from './interface/stateHistory.interface';

@Resolver(() => OrderType)
export class OrdersResolver {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly employeesService: EmployeesService,
    private readonly customersService: CustomersService,
  ) {}

  @Query(() => [OrderType])
  async orders(): Promise<OrderType[]> {
    return await Promise.all(
      (
        await this.ordersService.findAll()
      ).map(async (order): Promise<OrderType> => {
        const customer = await this.customersService.findOne(order.customerId);
        const employee = await this.employeesService.findOne(order.employeeId);

        order.customer = customer;
        order.employee = employee;
        order.currentState = OrderStates[order.currentState];

        if (order.stateHistory) {
          order.stateHistory.map((s) => {
            return (s.state = OrderStates[s.state]);
          });
        }

        return order;
      }),
    );
  }

  @Query(() => OrderType)
  async order(@Args('id') id: string): Promise<OrderType> {
    const order = await this.ordersService.findOne(id);
    const customer = await this.customersService.findOne(order.customerId);
    const employee = await this.employeesService.findOne(order.employeeId);

    order.currentState = OrderStates[order.currentState];
    order.employee = employee;
    order.customer = customer;

    if (order.stateHistory) {
      order.stateHistory.map((s) => {
        return (s.state = OrderStates[s.state]);
      });
    }

    return order;
  }

  // @Mutation(() => OrderType)
  // async createOrder(
  //   @Args('input') input: OrderInputCreate,
  // ): Promise<OrderType> {
  //   await this.customersService.create(input.customer);
  //   await this.employeesService.create(input.employee);
  //
  //   input.currentState = OrderStates[input.currentState];
  //   const order: OrderType = await this.ordersService.create(input);
  //
  //   return {
  //     ...order._doc,
  //     current  State: OrderStates[input.currentState],
  //   };
  // }

  @Mutation(() => OrderType)
  async updateState(@Args('id') id: string, @Args('input') input: OrderInput) {
    input.currentState = OrderStates[input.currentState];
    const oldOrder = await this.ordersService.findOne(id);

    if (
      input.currentState < oldOrder.currentState ||
      input.currentState > oldOrder.currentState + 1
    ) {
      throw Error(
        'state transition is only possible in this way [OPEN -> IN_PROGRESS -> COMPLETE], you can not go back or skip a state',
      );
    }

    if (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      input.currentState === OrderStates.IN_PROGRESS &&
      !input.employeeId
    ) {
      throw Error('You need to add an Employee to the Order');
    }

    const employee = await this.employeesService.findOne(input.employeeId);

    if (!employee) {
      throw Error('Employee not found');
    }

    if (!oldOrder.stateHistory) oldOrder.stateHistory = [];

    oldOrder.stateHistory.push({
      state: oldOrder.currentState,
      employeeId: employee._id,
      updatedAt: new Date().getTime(),
    });

    const newOrderData: Order = input as Order;
    newOrderData.stateHistory = oldOrder.stateHistory as StateHistory[];

    const order = await this.ordersService.update(id, newOrderData);
    const customer = await this.customersService.findOne(oldOrder.customerId);

    order.employee = employee;
    order.customer = customer;

    return order;
  }
}
