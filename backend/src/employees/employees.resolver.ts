import { Query, Resolver } from '@nestjs/graphql';
import { EmployeesService } from './employees.service';
import { EmployeeType } from './dto/employee.dto';

@Resolver(() => EmployeeType)
export class EmployeesResolver {
  constructor(private readonly employeesService: EmployeesService) {}

  @Query(() => [EmployeeType])
  async employees(): Promise<EmployeeType[]> {
    return await this.employeesService.findAll();
  }
}
