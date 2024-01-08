import { Module } from '@nestjs/common';
import { SignupController } from './signup/signup.controller';
import { SignupsrvService } from './signup/signupsrv.service';
import { UsersService } from 'src/dbsrvs/users/users.service';
import { PasswordService } from 'src/shared/password/password.service';

@Module({
  controllers: [SignupController],
  providers: [SignupsrvService, UsersService, PasswordService],
  exports: [SignupsrvService],
})
export class SignupModule {}
