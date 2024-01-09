import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { SignupsrvService } from './signupsrv.service';
import { UserInfo } from 'src/dto/schema/signup';

@Controller('signup')
export class SignupController {
  constructor(private signupService: SignupsrvService) {}

  @Get()
  @Render('register')
  loadSignup() {}

  @Post()
  async postSignup(@Body() body: UserInfo) {
    const newUser = await this.signupService.createUser(body);
    return JSON.parse(JSON.stringify(newUser));
  }
}
