import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UsuarioService } from '../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private userService: UsuarioService, // Injete o serviço de usuário aqui
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, // Respeitar o campo 'exp' do token.
      secretOrKey: 'artur', // Substitua pela chave secreta de configuração.
    });
  }

  async validate(payload: any) {
    // A busca do usuário no banco de dados por ID (substitua pelo método apropriado do seu UserService)
    const user = await this.userService.findOne(payload.sub);

    if (!user) {
      // Se o usuário não existe ou as permissões não são válidas, lançar uma exceção
      throw new Error('Usuário não encontrado ou permissões inválidas');
    }

    // Se necessário, verifique outras propriedades do usuário, como permissões ou status da conta

    // O retorno aqui é o que será anexado ao objeto Request do NestJS como req.user
    return user; // Retorne o objeto de usuário inteiro ou um subconjunto de suas informações seguras
  }
}
