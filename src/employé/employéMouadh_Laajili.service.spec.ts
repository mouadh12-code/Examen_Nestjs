import { Test, TestingModule } from '@nestjs/testing';
import { EmployeService } from './employéMouadh_Laajili.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Employe } from './employéMouadh_Laajili.entity';

describe('EmployeService', () => {
  let service: EmployeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmployeService,
        {
          provide: getRepositoryToken(Employe),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<EmployeService>(EmployeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
