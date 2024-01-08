import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from 'src/shared/jwt/jwt.service';

@Injectable()
export class AuthGuardGuard implements CanActivate {
  constructor(private jwtSvc: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    const tokenValue = this.jwtSvc.verify(token);

    if (!token || !tokenValue) {
      throw new UnauthorizedException('Invalid Token');
    }
    request.body['user'] = tokenValue;
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers['authorization']?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
