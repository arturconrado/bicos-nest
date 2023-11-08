import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class UpdatePagamentoDto {
  @IsUUID()
  @IsOptional()
  id_tarefa?: string;

  @IsNumber()
  @IsOptional()
  valor?: number;

  @IsString()
  @IsOptional()
  metodo?: string;

  @IsBoolean()
  @IsOptional()
  confirmado?: boolean;
  id: number;
}
