import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacoe.dto';
import { Avaliacao } from './entities/avaliacoe.entity';

@Injectable()
export class AvaliacoesService {
  constructor(
    @InjectRepository(Avaliacao)
    private avaliacaoRepository: Repository<Avaliacao>,
  ) {}

  async create(createAvaliacaoDto: CreateAvaliacaoDto): Promise<Avaliacao> {
    const avaliacao = this.avaliacaoRepository.create(createAvaliacaoDto);
    return this.avaliacaoRepository.save(avaliacao);
  }

  async findAll(): Promise<Avaliacao[]> {
    return this.avaliacaoRepository.find();
  }

  async findOne(id: number): Promise<Avaliacao> {
    return this.avaliacaoRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateAvaliacaoDto: UpdateAvaliacaoDto,
  ): Promise<Avaliacao> {
    await this.avaliacaoRepository.update(id, updateAvaliacaoDto);
    return this.avaliacaoRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.avaliacaoRepository.delete(id);
  }
}
