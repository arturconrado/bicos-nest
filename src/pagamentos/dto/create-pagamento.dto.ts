import { IsBoolean, IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class CreatePagamentoDto {
  @IsUUID()
  @IsNotEmpty()
  id_tarefa: string;

  @IsNumber()
  @IsNotEmpty()
  valor: number;

  @IsString()
  @IsNotEmpty()
  metodo: string;

  @IsBoolean()
  confirmado: boolean;
}
