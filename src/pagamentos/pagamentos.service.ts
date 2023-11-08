import { Injectable } from '@nestjs/common';
import { CreatePagamentoDto } from './dto/create-pagamento.dto';
import { UpdatePagamentoDto } from './dto/update-pagamento.dto';

@Injectable()
export class PagamentosService {
  create(createPagamentoDto: CreatePagamentoDto) {
    console.log(createPagamentoDto);
    return 'This action adds a new pagamento';
  }

  findAll() {
    return `This action returns all pagamentos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pagamento`;
  }

  update(id: number, updatePagamentoDto: UpdatePagamentoDto) {
    console.log(updatePagamentoDto);
    return `This action updates a #${id} pagamento`;
  }

  remove(id: number) {
    return `This action removes a #${id} pagamento`;
  }
}