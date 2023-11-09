import { TipoUsuario } from './user.entity';

export interface UserWithoutPassword {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  tipo: TipoUsuario;
  criado_em: Date;
}
