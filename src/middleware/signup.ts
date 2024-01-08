import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UserInfo } from 'src/dto/schema/signup';

@Injectable()
export class SignupMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const userData = req.body as UserInfo;
    const passRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^*-]).{8,}$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!userData.mail.match(emailRegex)) {
      return res.status(400).send('invalid mail');
    }

    if (!userData.password.match(passRegex)) {
      return res.status(400).send('invalid password');
    }
    next();
  }
}
