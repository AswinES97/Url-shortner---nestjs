import { Module } from '@nestjs/common';
import { MinifyUrlController } from './minify-url/minify-url.controller';
import { UrlService } from 'src/dbsrvs/svc/url/url.service';
import { MinifyUrlService } from './minify-url/minify-url.service';
import { JwtService } from 'src/shared/jwt/jwt.service';

@Module({
  controllers: [MinifyUrlController],
  providers: [UrlService, MinifyUrlService, JwtService, UrlService],
})
export class UrlModule {}
