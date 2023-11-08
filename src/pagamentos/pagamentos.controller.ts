import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PagamentosService } from './pagamentos.service';
import { CreatePagamentoDto } from './dto/create-pagamento.dto';
import { UpdatePagamentoDto } from './dto/update-pagamento.dto';

@Controller()
export class PagamentosController {
  constructor(private readonly pagamentosService: PagamentosService) {}

  @MessagePattern('createPagamento')
  create(@Payload() createPagamentoDto: CreatePagamentoDto) {
    return this.pagamentosService.create(createPagamentoDto);
  }

  @MessagePattern('findAllPagamentos')
  findAll() {
    return this.pagamentosService.findAll();
  }

  @MessagePattern('findOnePagamento')
  findOne(@Payload() id: number) {
    return this.pagamentosService.findOne(id);
  }

  @MessagePattern('updatePagamento')
  update(@Payload() updatePagamentoDto: UpdatePagamentoDto) {
    return this.pagamentosService.update(
      updatePagamentoDto.id,
      updatePagamentoDto,
    );
  }

  @MessagePattern('removePagamento')
  remove(@Payload() id: number) {
    return this.pagamentosService.remove(id);
  }
}
