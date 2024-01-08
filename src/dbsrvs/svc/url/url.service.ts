import { Injectable } from '@nestjs/common';
import { urlModel } from 'src/dbsrvs/models/url';
import { Iinput } from 'src/url/minify-url/minify-url.service';

@Injectable()
export class UrlService {
  async addNewUrl(data: Iinput) {
    const newAddedUrl = new urlModel({
      userId: data.userId,
      urls: [
        {
          url: data.url,
          miniUrl: data.miniUrl,
        },
      ],
    });
    return newAddedUrl.save();
  }

  async findUser(userId: string) {
    return await urlModel.findOne({ userId });
  }

  async findUrl(url: string) {
    return await urlModel.findOne({
      urls: {
        $elemMatch: {
          url: url,
        },
      },
    });
  }
}
