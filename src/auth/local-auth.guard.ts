// local-auth.guard.ts
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  // O construtor é opcional aqui, pois não estamos personalizando nada adicional
  // O AuthGuard já está configurado para usar a estratégia 'local' por padrão
}
