import { Module } from '@nestjs/common';
import { SignupController } from './signup/signup.controller';
import { SignupsrvService } from './signupsrv/signupsrv.service';

@Module({
  controllers: [SignupController],
  providers: [SignupsrvService],
  exports: [SignupsrvService],
})
export class SignupModule {}
