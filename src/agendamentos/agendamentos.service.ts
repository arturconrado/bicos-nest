import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Agendamento } from './entities/agendamento.entity';
import { CreateAgendamentoDto } from './dto/create-agendamento.dto';
import { UpdateAgendamentoDto } from './dto/update-agendamento.dto';

@Injectable()
export class AgendamentosService {
  constructor(
    @InjectRepository(Agendamento)
    private agendamentoRepository: Repository<Agendamento>,
  ) {}

  async create(
    createAgendamentoDto: CreateAgendamentoDto,
  ): Promise<Agendamento> {
    const agendamento = this.agendamentoRepository.create(createAgendamentoDto);
    return this.agendamentoRepository.save(agendamento);
  }

  async findAll(): Promise<Agendamento[]> {
    return this.agendamentoRepository.find();
  }

  async findOne(id: number): Promise<Agendamento> {
    return this.agendamentoRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateAgendamentoDto: UpdateAgendamentoDto,
  ): Promise<Agendamento> {
    await this.agendamentoRepository.update(id, updateAgendamentoDto);
    return this.agendamentoRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.agendamentoRepository.delete(id);
  }
}
