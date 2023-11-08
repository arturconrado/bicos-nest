// agendamento.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Tarefa } from '../../tarefas/tarefa.entity';

@Entity('agendamentos')
export class Agendamento {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Tarefa)
  @JoinColumn({ name: 'id_tarefa' })
  tarefa: Tarefa;

  @Column('timestamp with time zone')
  data_horario: Date;
}
