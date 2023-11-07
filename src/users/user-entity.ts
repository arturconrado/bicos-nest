import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


//todo -> add new coluns
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
