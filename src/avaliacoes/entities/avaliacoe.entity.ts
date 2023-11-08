// avaliacao.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Tarefa } from '../../tarefas/tarefa.entity';
import { Usuario } from '../../users/user.entity';

@Entity('avaliacoes')
export class Avaliacao {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Tarefa)
  @JoinColumn({ name: 'id_tarefa' })
  tarefa: Tarefa;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;

  @Column()
  nota: number;

  @Column('text')
  comentario: string;

  @Column({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  criado_em: Date;
}
