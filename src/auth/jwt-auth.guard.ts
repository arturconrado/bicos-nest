// jwt-auth.guard.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // Adicione aqui sua lógica personalizada de autenticação, se necessário
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    // Você pode personalizar o que é feito quando a autenticação falha
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
