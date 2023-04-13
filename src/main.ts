import { HttpException, HttpStatus, ValidationPipe } from '@nestjs/common';
import { ValidationError } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { HttpExceptionFilter } from '@common/exceptions';
import { LoggerInterceptor } from '@common/interceptors/logger.interceptor';

import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.setGlobalPrefix('api/v1');

  app.useGlobalFilters(new HttpExceptionFilter());

  app.useGlobalInterceptors(new LoggerInterceptor());

  app.useGlobalPipes(
    new ValidationPipe({
      stopAtFirstError: true,
      exceptionFactory: (
        validationErrors: ValidationError[] = [],
      ): HttpException => {
        return new HttpException(validationErrors, HttpStatus.BAD_REQUEST);
      },
    }),
  );

  await app.listen(3000);
}
bootstrap();
