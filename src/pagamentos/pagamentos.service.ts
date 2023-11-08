import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pagamento } from './entities/pagamento.entity';
import { CreatePagamentoDto } from './dto/create-pagamento.dto';
import { UpdatePagamentoDto } from './dto/update-pagamento.dto';

@Injectable()
export class PagamentosService {
  constructor(
    @InjectRepository(Pagamento)
    private pagamentoRepository: Repository<Pagamento>,
  ) {}

  async create(createPagamentoDto: CreatePagamentoDto): Promise<Pagamento> {
    const pagamento = this.pagamentoRepository.create(createPagamentoDto);
    return this.pagamentoRepository.save(pagamento);
  }

  async findAll(): Promise<Pagamento[]> {
    return this.pagamentoRepository.find();
  }

  async findOne(id: number): Promise<Pagamento> {
    return this.pagamentoRepository.findOneBy({ id });
  }

  async update(id: number, updatePagamentoDto: UpdatePagamentoDto): Promise<Pagamento> {
    await this.pagamentoRepository.update(id, updatePagamentoDto);
    return this.pagamentoRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.pagamentoRepository.delete(id);
  }
}
