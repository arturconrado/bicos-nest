import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tarefa } from './tarefa.entity';

@Injectable()
export class TarefasService {
  constructor(
    @InjectRepository(Tarefa)
    private tarefasRepository: Repository<Tarefa>,
  ) {}

  findAll(): Promise<Tarefa[]> {
    return this.tarefasRepository.find({ relations: ['usuarios', 'servicos'] });
  }

  findOne(id: string): Promise<Tarefa> {
    return this.tarefasRepository.findOne({
      where: { id },
      relations: ['usuarios', 'servicos'],
    });
  }

  create(tarefaData: Partial<Tarefa>): Promise<Tarefa> {
    const tarefa = this.tarefasRepository.create(tarefaData);
    return this.tarefasRepository.save(tarefa);
  }

  async update(id: string, tarefaData: Partial<Tarefa>): Promise<Tarefa> {
    await this.tarefasRepository.update(id, tarefaData);
    return this.tarefasRepository.findOne({
      where: { id },
      relations: ['usuarios', 'servicos'],
    });
  }

  async remove(id: string): Promise<void> {
    await this.tarefasRepository.delete(id);
  }
}
