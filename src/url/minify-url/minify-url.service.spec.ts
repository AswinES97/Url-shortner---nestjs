import { Test, TestingModule } from '@nestjs/testing';
import { MinifyUrlService } from './minify-url.service';

describe('MinifyUrlService', () => {
  let service: MinifyUrlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MinifyUrlService],
    }).compile();

    service = module.get<MinifyUrlService>(MinifyUrlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
