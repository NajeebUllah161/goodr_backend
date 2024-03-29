import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerConfig } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await swaggerConfig(app);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
