// update-agendamento.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateAgendamentoDto } from './create-agendamento.dto';
import { IsInt } from 'class-validator';

export class UpdateAgendamentoDto extends PartialType(CreateAgendamentoDto) {
  @IsInt()
  id: number;
}
