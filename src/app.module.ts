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
import { JwtService } from './shared/jwt/jwt.service';
import { UsersService } from './dbsrvs/users/users.service';
import { PasswordService } from './shared/password/password.service';

@Module({
  imports: [SignupModule],
  controllers: [AppController],
  providers: [AppService, JwtService, UsersService, PasswordService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(SignupMiddleware)
      .forRoutes({ path: 'signup', method: RequestMethod.POST });
  }
}
