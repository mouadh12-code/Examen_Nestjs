import { Test, TestingModule } from '@nestjs/testing';
import { EmployeController } from './employéMouadh_Laajili.controller';
import { EmployeService } from './employéMouadh_Laajili.service';

describe('EmployeController', () => {
  let controller: EmployeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeController],
      providers: [
        {
          provide: EmployeService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<EmployeController>(EmployeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
