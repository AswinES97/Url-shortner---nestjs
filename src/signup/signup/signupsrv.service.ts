import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/dbsrvs/svc/users/users.service';
import { UserInfo } from 'src/dto/schema/signup';

@Injectable()
export class SignupsrvService {
  constructor(private userSrv: UsersService) {}
  async createUser(userData: UserInfo) {
    const doesUserExist = await this.userSrv.findUser(userData.mail);
    if (doesUserExist !== null) {
      throw new BadRequestException('Email Already Exist');
    }
    return await this.userSrv.createUser(userData);
  }
}
