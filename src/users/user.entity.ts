import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { IsEmail, IsEnum, Length } from 'class-validator';

export enum TipoUsuario {
  Cliente = 'Cliente',
  Prestador = 'Prestador',
}

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn('uuid') // Isso irá gerar um UUID para cada usuário automaticamente
  id: string;

  @Column()
  nome: string;

  @IsEmail()
  @Column({ unique: true })
  email: string;

  @Length(6, 20)
  @Column()
  senha: string;

  @Column()
  telefone: string;

  @IsEnum(TipoUsuario)
  @Column({
    type: 'enum',
    enum: TipoUsuario,
    default: TipoUsuario.Cliente,
  })
  tipo: TipoUsuario;

  @CreateDateColumn({ type: 'timestamp' })
  criado_em: Date;
}
