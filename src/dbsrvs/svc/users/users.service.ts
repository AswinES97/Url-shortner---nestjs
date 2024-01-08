import { Injectable } from '@nestjs/common';
import { UserModel } from '../../models/user.model';
import { PasswordService } from 'src/shared/password/password.service';
import { UserInfo } from 'src/dto/schema/signup';

@Injectable()
export class UsersService {
  constructor(private passSrv: PasswordService) {}
  async createUser(userData: UserInfo) {
    try {
      const newUser = new UserModel({
        mail: userData.mail,
        password: await this.passSrv.hash(userData.password),
      });
      return newUser.save();
    } catch (err) {
      console.log(err);
    }
  }

  async findUser(mail: string) {
    try {
      return await UserModel.findOne({ mail });
    } catch (err) {
      console.log(err);
    }
  }
}
