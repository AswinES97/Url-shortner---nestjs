import { Injectable } from '@nestjs/common';
import { urlModel } from 'src/dbsrvs/models/url';
import {
  IGetUrlParameters,
  Iinput,
} from 'src/url/minify-url/minify-url.service';

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

  async findUrl(data: IGetUrlParameters) {
    return await urlModel.find(
      {
        userId: data.userId,
        urls: {
          $elemMatch: {
            miniUrl: data.miniUrl,
          },
        },
      },
      {
        _id: 0,
        'urls.$': 1,
      },
    );
  }
}
