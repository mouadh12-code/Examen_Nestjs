import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeService } from './employéMouadh_Laajili.service';
import { EmployeController } from './employéMouadh_Laajili.controller';
import { Employe } from './employéMouadh_Laajili.entity';
import { EmployeGateway } from './employéMouadh_Laajili.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Employe])],
  controllers: [EmployeController],
  providers: [EmployeService, EmployeGateway],
})
export class EmployeModule {}
