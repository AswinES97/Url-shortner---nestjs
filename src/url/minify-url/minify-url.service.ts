import { Injectable } from '@nestjs/common';
import { UrlService } from 'src/dbsrvs/svc/url/url.service';

@Injectable()
export class MinifyUrlService {
  constructor(private urlSvc: UrlService) {}
  async minify(data: Iinput) {
    // await this.urlSvc.
  }
}

export interface Iinput {
  url: string;
  userId: string;
  miniUrl: string;
}
