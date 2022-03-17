import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { OrdersModule } from '../src/orders/orders.module';
import { ApolloDriver } from '@nestjs/apollo';

describe('OrderController (e2e)', () => {
  let app;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        OrdersModule,
        MongooseModule.forRoot('mongodb://localhost/nestgraphqltesting'),
        GraphQLModule.forRoot({
          driver: ApolloDriver,
          autoSchemaFile: 'schema.gql',
        }),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  const order = {
    title: 'Great order',
    price: 10,
    description: 'Description of this great order',
  };

  let id = '';

  const updatedOrder = {
    title: 'Great updated order',
    price: 20,
    description: 'Updated description of this great order',
  };

  const createOrderObject = JSON.stringify(order).replace(
    /\"([^(\")"]+)\":/g,
    '$1:',
  );

  const createOrderQuery = `
  mutation {
    createOrder(input: ${createOrderObject}) {
      title
      price
      description
      id
    }
  }`;

  it('createOrder', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        query: createOrderQuery,
      })
      .expect(({ body }) => {
        console.log(body);

        const data = body.data.createOrder;
        id = data.id;
        expect(data.title).toBe(order.title);
        expect(data.description).toBe(order.description);
        expect(data.price).toBe(order.price);
      })
      .expect(200);
  });

  it('getOrders', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        query: '{orders{title, price, description, id}}',
      })
      .expect(({ body }) => {
        const data = body.data.orders;
        const orderResult = data[0];
        expect(data.length).toBeGreaterThan(0);
        expect(orderResult.title).toBe(order.title);
        expect(orderResult.description).toBe(order.description);
        expect(orderResult.price).toBe(order.price);
      })
      .expect(200);
  });

  const updateOrderObject = JSON.stringify(updatedOrder).replace(
    /\"([^(\")"]+)\":/g,
    '$1:',
  );

  it('updateOrder', () => {
    const updateOrderQuery = `
    mutation {
      updateOrder(id: "${id}", input: ${updateOrderObject}) {
        title
        price
        description
        id
      }
    }`;

    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        query: updateOrderQuery,
      })
      .expect(({ body }) => {
        const data = body.data.updateOrder;
        expect(data.title).toBe(updatedOrder.title);
        expect(data.description).toBe(updatedOrder.description);
        expect(data.price).toBe(updatedOrder.price);
      })
      .expect(200);
  });
});
