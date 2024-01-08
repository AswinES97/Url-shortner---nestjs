import { nanoid } from 'nanoid';
import * as _ from 'lodash';
import {
  BadRequestException,
  // BadRequestException,
  Body,
  Controller,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuardGuard } from 'src/auth-guard/auth-guard.guard';
import { MinifyUrlService } from './minify-url.service';
import { UserInfo } from 'src/dto/schema/signup';

@Controller('minify-url')
export class MinifyUrlController {
  constructor(private minifyUrlSvc: MinifyUrlService) {}

  @UseGuards(AuthGuardGuard)
  @Post()
  async minifyUrl(@Body() body: Idata) {
    console.log('body: ', body);
    const user: UserInfo = JSON.parse(body.user.data as string);
    const doesUserExist = await this.minifyUrlSvc.getUser(user.userId);

    if (doesUserExist === null) {
      const data = {
        url: body.url,
        userId: user.userId,
        miniUrl: nanoid(),
      };
      const newData = await this.minifyUrlSvc.minify(data);
      return JSON.parse(JSON.stringify(newData));
    } else {
      console.log(doesUserExist);
      const urls = doesUserExist.urls;
      const doesUrlExist = _.findIndex(urls, (o) => o.url === body.url);
      console.log('lodash: ', doesUrlExist);

      if (doesUrlExist !== -1) {
        throw new BadRequestException('Url already Minified');
      }

      doesUserExist.urls.push({
        url: body.url,
        miniUrl: nanoid(),
      });
      return await doesUserExist.save();
    }
  }
}

interface Idata {
  url: string;
  user: {
    data: UserInfo;
    exp: Date;
    iat: Date;
  };
}
