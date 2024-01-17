import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './app.controller';
import { ProductsService } from './app.service';

describe('AppController', () => {
  let appController: ProductsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService],
    }).compile();

    appController = app.get<ProductsController>(ProductsService);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getProduct('1'));
    });
  });
});