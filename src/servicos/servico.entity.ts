import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Categoria } from '../categoria/entities/categoria.entity';

@Entity('servicos')
export class Servico {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Categoria)
  @JoinColumn({ name: 'id_categoria' })
  categoria: Categoria;

  @Column('varchar', { length: 255 })
  nome: string;

  @Column('text')
  descricao: string;

  @Column('decimal', { precision: 10, scale: 2 })
  preco_base: number;
}
