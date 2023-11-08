// create-agendamento.dto.ts
import { IsInt, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateAgendamentoDto {
  @IsInt()
  @IsNotEmpty()
  id_tarefa: number;

  @IsDateString()
  @IsNotEmpty()
  data_horario: string;
}
