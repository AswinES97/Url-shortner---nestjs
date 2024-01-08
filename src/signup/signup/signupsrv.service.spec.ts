import { Test, TestingModule } from '@nestjs/testing';
import { SignupsrvService } from './signupsrv.service';

describe('SignupsrvService', () => {
  let service: SignupsrvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SignupsrvService],
    }).compile();

    service = module.get<SignupsrvService>(SignupsrvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
