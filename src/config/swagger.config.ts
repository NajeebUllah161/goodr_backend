import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const swaggerConfig = async (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Goodr Backend')
    .setDescription('The Goodr Backend API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/doc', app, document);
};
