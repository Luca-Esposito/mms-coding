import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Order } from './interface/order.interface';
import { OrderType } from './dto/order.dto';

@Injectable()
export class OrdersService {
  constructor(@InjectModel('Order') private orderModel: Model<Order>) {}
  //
  // async create(createOrderDto: OrderInput): Promise<OrderType> {
  //   const createdOrder = new this.orderModel(createOrderDto);
  //   return await createdOrder.save();
  // }

  async findAll(): Promise<OrderType[]> {
    return this.orderModel.find().lean();
  }

  async findOne(id: string): Promise<OrderType> {
    return this.orderModel.findOne({ _id: id }).lean();
  }

  async delete(id: string): Promise<OrderType> {
    return this.orderModel.findByIdAndRemove(id);
  }

  async update(id: string, order: Order): Promise<OrderType> {
    return this.orderModel.findByIdAndUpdate(id, order, { new: true });
  }
}
