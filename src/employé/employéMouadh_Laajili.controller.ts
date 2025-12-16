import {
  Controller,
  Body,
  Get,
  Param,
  Post,
  Delete,
  Put,
} from '@nestjs/common';
import { EmployeService } from './employéMouadh_Laajili.service';
import { CreateEmployeDto } from './CreateEmployéMouadh_LaajiliDto';
import { ObjectId } from 'mongodb';

@Controller('employees')
export class EmployeController {
  constructor(private readonly employeService: EmployeService) {}

  // ADD
  @Post('AddEmploye')
  createEmploye(@Body() data: CreateEmployeDto) {
    return this.employeService.createEmploye(data);
  }

  // FIND ALL
  @Get('showEmployees')
  findAll() {
    return this.employeService.findAll();
  }

  // FIND ONE
  @Get('showEmploye/:id')
  findOne(@Param('id') id: string) {
    return this.employeService.findById(new ObjectId(id));
  }

  // DELETE
  @Delete('DeleteEmploye/:id')
  deleteEmploye(@Param('id') id: string) {
    return this.employeService.deleteEmploye(new ObjectId(id));
  }

  // UPDATE
  @Put('UpdateEmploye/:id')
  updateEmploye(
    @Param('id') id: string,
    @Body() data: Partial<CreateEmployeDto>,
  ) {
    return this.employeService.updateEmploye(new ObjectId(id), data);
  }

  // SEARCH BY NAME
  @Get('searchByName/:FullName')
  findByName(@Param('FullName') FullName: string) {
    return this.employeService.findByName(FullName);
  }

  // ABOVE AVERAGE
  @Get('aboveAverage')
  aboveAverage() {
    return this.employeService.findAboveAverageSalary();
  }

  // SEARCH BY RANK
  @Get('rank/:numRank')
  findByRank(@Param('numRank') rank: number) {
    return this.employeService.findByRank(Number(rank));
  }

  //Socket
  @Post('increaseSalary/:id')
increaseSalary(
  @Param('id') id: string,
  @Body('percentage') percentage: number,
) {
  return this.employeService.increaseSalary(
    new ObjectId(id),
    percentage,
  );
}

}
