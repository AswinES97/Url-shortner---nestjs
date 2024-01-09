import { Injectable } from '@nestjs/common';
import { UrlService } from 'src/dbsrvs/svc/url/url.service';

@Injectable()
export class MinifyUrlService {
  constructor(private urlSvc: UrlService) {}
  async getAllUrl(userId: string) {
    return await this.urlSvc.getAllUrls(userId);
  }

  async minify(data: Iinput) {
    return await this.urlSvc.addNewUrl(data);
  }

  async getUser(userId: string) {
    return await this.urlSvc.findUser(userId);
  }

  async getUrl(data: IGetUrlParameters) {
    return await this.urlSvc.findUrl(data);
  }

  async updateUrlArray(data: IGetUrlParameters) {
    return await this.urlSvc.removeUrl(data);
  }
}

export interface Iinput {
  url: string;
  userId: string;
  miniUrl: string;
}
export interface IGetUrlParameters {
  miniUrl: string;
  userId: string;
}
