// create-avaliacao.dto.ts
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAvaliacaoDto {
  @IsInt()
  @IsNotEmpty()
  id_tarefa: number;

  @IsInt()
  @IsNotEmpty()
  id_usuario: number;

  @IsInt()
  @IsNotEmpty()
  nota: number;

  @IsString()
  @IsOptional()
  comentario?: string;
}
