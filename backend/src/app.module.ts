import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { CustomersModule } from './customers/customers.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [
    OrdersModule,
    CustomersModule,
    EmployeesModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.mongoURI),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
