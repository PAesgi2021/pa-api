import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  const port = 3000;
  await app.listen(port, '127.0.0.1');
  logger.log(`Application started on port ${port}`);
  logger.log(app.getUrl());

}
bootstrap();
