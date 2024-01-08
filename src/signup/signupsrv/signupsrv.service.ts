import { Injectable } from '@nestjs/common';
import { UserInfo } from 'src/dto/schema/signup';

@Injectable()
export class SignupsrvService {
  createUser(userData: UserInfo) {
    console.log(userData);
  }
}
