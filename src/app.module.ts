import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignupModule } from './signup/signup.module';
import { SignupMiddleware } from './middleware/signup';
import { LoginModule } from './login/login.module';
import { UrlModule } from './url/url.module';
import { UrlService } from './dbsrvs/svc/url/url.service';

@Module({
  imports: [SignupModule, LoginModule, UrlModule],
  controllers: [AppController],
  providers: [AppService, UrlService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(SignupMiddleware)
      .forRoutes({ path: 'signup', method: RequestMethod.POST });
  }
}
