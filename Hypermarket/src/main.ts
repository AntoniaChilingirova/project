import { NestFactory } from '@nestjs/core';
import { ProductModule } from './app.module'



async function bootstrap() {
  const app = await NestFactory.create(ProductModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
