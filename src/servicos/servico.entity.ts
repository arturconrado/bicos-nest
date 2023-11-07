import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('servicos')
export class Servico {
  @PrimaryGeneratedColumn()
  id: number;
}
