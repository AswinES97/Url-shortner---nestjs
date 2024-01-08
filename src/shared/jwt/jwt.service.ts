import { Injectable } from '@nestjs/common';
import * as Jwt from 'jsonwebtoken';
import { UserInfo } from 'src/dto/schema/signup';

@Injectable()
export class JwtService {
  private jwt_secret: string;
  constructor() {
    this.jwt_secret = process.env.JWT_SECRET;
  }
  generate(data: UserInfo): string | any {
    const userData = JSON.stringify(data);
    console.log(this.jwt_secret);
    console.log(data);
    // Todo error for not generating token
    try {
      return Jwt.sign(
        {
          data: userData,
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // 1 day
        },
        this.jwt_secret,
      );
    } catch (err) {
      console.log('err', err);
    }
  }

  verify(token: string) {
    try {
      return Jwt.verify(token, this.jwt_secret);
    } catch (err) {
      // todo - error for verify
      console.log('jwt verify error');
    }
  }
}
