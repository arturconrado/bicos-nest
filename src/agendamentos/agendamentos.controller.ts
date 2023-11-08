import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AgendamentosService } from './agendamentos.service';
import { CreateAgendamentoDto } from './dto/create-agendamento.dto';
import { UpdateAgendamentoDto } from './dto/update-agendamento.dto';

@Controller()
export class AgendamentosController {
  constructor(private readonly agendamentosService: AgendamentosService) {}

  @MessagePattern('createAgendamento')
  create(@Payload() createAgendamentoDto: CreateAgendamentoDto) {
    return this.agendamentosService.create(createAgendamentoDto);
  }

  @MessagePattern('findAllAgendamentos')
  findAll() {
    return this.agendamentosService.findAll();
  }

  @MessagePattern('findOneAgendamento')
  findOne(@Payload() id: number) {
    return this.agendamentosService.findOne(id);
  }

  @MessagePattern('updateAgendamento')
  update(@Payload() updateAgendamentoDto: UpdateAgendamentoDto) {
    return this.agendamentosService.update(updateAgendamentoDto.id, updateAgendamentoDto);
  }

  @MessagePattern('removeAgendamento')
  remove(@Payload() id: number) {
    return this.agendamentosService.remove(id);
  }
}
