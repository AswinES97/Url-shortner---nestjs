import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RequestTimeoutException } from '@nestjs/common';
import 'dotenv/config';
import mongoose from 'mongoose';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');

  try {
    await mongoose.connect(process.env.MONGO_URL);
    await app.listen(process.env.PORT);
  } catch (err) {
    console.log(err);
    throw new RequestTimeoutException();
  }
  console.log('server running on: ', process.env.PORT);
}
bootstrap();
