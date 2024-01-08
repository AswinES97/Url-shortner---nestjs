import { Body, Controller, Post } from '@nestjs/common';
import { SignupsrvService } from '../signupsrv/signupsrv.service';
import { UserInfo } from 'src/dto/schema/signup';

@Controller('signup')
export class SignupController {
  constructor(private signupService: SignupsrvService) {}
  @Post()
  postSignup(@Body() body: UserInfo) {
    this.signupService.createUser(body);
  }
}
