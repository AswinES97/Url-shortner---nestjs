import { nanoid } from 'nanoid';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuardGuard } from 'src/auth-guard/auth-guard.guard';
import { MinifyUrlService } from './minify-url.service';
import { UserInfo } from 'src/dto/schema/signup';

@Controller('minify-url')
export class MinifyUrlController {
  constructor(private minifyUrlSvc: MinifyUrlService) {}

  @UseGuards(AuthGuardGuard)
  @Post()
  async minifyUrl(@Body() body: Idata) {
    const user: UserInfo = JSON.parse(body.user.data as string);
    const data = {
      url: body.url,
      userId: user.userId,
      miniUrl: nanoid(),
    };
    await this.minifyUrlSvc.minify(data);
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
