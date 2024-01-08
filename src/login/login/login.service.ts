import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/dbsrvs/svc/users/users.service';

@Injectable()
export class LoginService {
  constructor(private userSvc: UsersService) {}
  async getUserData(mail: string) {
    return await this.userSvc.findUser(mail);
  }
}
