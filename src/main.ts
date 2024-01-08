import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RequestTimeoutException } from '@nestjs/common';
import 'dotenv/config';
import mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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
