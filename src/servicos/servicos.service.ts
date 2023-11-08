import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servico } from './servico.entity';
import { CreateServicoDto } from './dto/create-servico.dto';
import { UpdateServicoDto } from './dto/update-servico.dto';

@Injectable()
export class ServicosService {
  constructor(
    @InjectRepository(Servico)
    private servicosRepository: Repository<Servico>,
  ) {}

  create(createServicoDto: CreateServicoDto): Promise<Servico> {
    const servico = this.servicosRepository.create(createServicoDto);
    return this.servicosRepository.save(servico);
  }

  findAll(): Promise<Servico[]> {
    return this.servicosRepository.find();
  }

  async findOne(id: string): Promise<Servico> {
    const servico = await this.servicosRepository.findOneBy({ id });
    if (!servico) {
      throw new NotFoundException(`Serviço com ID ${id} não encontrado.`);
    }
    return servico;
  }

  async update(id: string, updateServicoDto: UpdateServicoDto): Promise<Servico> {
    const servico = await this.servicosRepository.preload({
      id: id,
      ...updateServicoDto,
    });
    if (!servico) {
      throw new NotFoundException(`Serviço com ID ${id} não encontrado.`);
    }
    return this.servicosRepository.save(servico);
  }

  async remove(id: string): Promise<void> {
    const servico = await this.findOne(id);
    await this.servicosRepository.remove(servico);
  }
}
