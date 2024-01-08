import { Test, TestingModule } from '@nestjs/testing';
import { MinifyUrlController } from './minify-url.controller';

describe('MinifyUrlController', () => {
  let controller: MinifyUrlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MinifyUrlController],
    }).compile();

    controller = module.get<MinifyUrlController>(MinifyUrlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
