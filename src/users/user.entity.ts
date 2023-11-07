import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { IsEmail, Length } from 'class-validator';

@Entity('usuarios')
export class User {
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

  @Column()
  tipo: string;

  @CreateDateColumn({ type: 'timestamp' })
  criado_em: Date;
}
