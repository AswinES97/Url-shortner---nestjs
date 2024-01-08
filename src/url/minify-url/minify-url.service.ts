import { Injectable } from '@nestjs/common';
import { UrlService } from 'src/dbsrvs/svc/url/url.service';

@Injectable()
export class MinifyUrlService {
  constructor(private urlSvc: UrlService) {}
  async minify(data: Iinput) {
    return await this.urlSvc.addNewUrl(data);
  }

  async getUser(userId: string) {
    return await this.urlSvc.findUser(userId);
  }

  async getUrl(url: string) {
    return await this.urlSvc.findUrl(url);
  }
}

export interface Iinput {
  url: string;
  userId: string;
  miniUrl: string;
}
