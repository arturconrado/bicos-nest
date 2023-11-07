// tarefa.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../users/user.entity'; // Assumindo que você já tem uma entidade Usuario
import { Servico } from '../servicos/servico.entity'; // Assumindo que você já tem uma entidade Servico

@Entity('tarefas')
export class Tarefa {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'id_usuario' })
  usuario: User;

  @ManyToOne(() => Servico)
  @JoinColumn({ name: 'id_servico' })
  servico: Servico;

  @Column('text')
  descricao: string;

  @Column()
  status: string;

  @Column('decimal', { precision: 5, scale: 2 })
  preco: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  criado_em: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  atualizado_em: Date;
}
