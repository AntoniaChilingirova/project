
import { Module } from '@nestjs/common';
import { ProductsController } from './app.controller';
import { ProductsService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { productProviders } from './app.provider';

@Module({
  controllers: [ProductsController],
  providers: [...productProviders ,ProductsService],
  imports: [DatabaseModule],
})
export class ProductModule {}









