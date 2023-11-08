import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Tarefa } from '../../tarefas/tarefa.entity';

@Entity('pagamentos')
export class Pagamento {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Tarefa)
  @JoinColumn({ name: 'id_tarefa' })
  tarefa: Tarefa;

  @Column('numeric', { precision: 10, scale: 2 })
  valor: number;

  @Column({ type: 'varchar', length: 255 })
  metodo: string;

  @Column()
  confirmado: boolean;

  @Column({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  data_horario: Date;
}
