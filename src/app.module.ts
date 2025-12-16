import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeModule } from './employé/employéMouadh_Laajili.module';
import { Employe } from './employé/employéMouadh_Laajili.entity';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),

    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'entrepriseA',
      entities: [Employe],
      synchronize: true,
    }),

    EmployeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
