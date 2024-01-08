import { Module } from '@nestjs/common';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { UsersService } from 'src/dbsrvs/svc/users/users.service';
import { PasswordService } from 'src/shared/password/password.service';
import { JwtService } from 'src/shared/jwt/jwt.service';

@Module({
  controllers: [LoginController],
  providers: [LoginService, UsersService, PasswordService, JwtService],
})
export class LoginModule {}
