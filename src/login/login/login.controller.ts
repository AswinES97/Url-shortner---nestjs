import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { UserInfo } from 'src/dto/schema/signup';
import { LoginService } from './login.service';
import { JwtService } from 'src/shared/jwt/jwt.service';
import { PasswordService } from 'src/shared/password/password.service';

@Controller('login')
export class LoginController {
  constructor(
    private loginSvc: LoginService,
    private jwtSvc: JwtService,
    private passSvc: PasswordService,
  ) {}
  @Post()
  async userLogin(@Body() body: UserInfo) {
    const userData = (await this.loginSvc.getUserData(body.mail)) as UserInfo;
    const canLogin = await this.passSvc.compare(
      userData.password,
      body.password,
    );
    if (canLogin === false) {
      throw new BadRequestException('Invalid Password');
    }
    const token = this.jwtSvc.generate({
      userId: userData.userId,
      mail: userData.mail,
    });
    return { token };
  }
}
