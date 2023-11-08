import { IsNotEmpty, IsString, IsDecimal } from 'class-validator';

export class CreateServicoDto {
  @IsNotEmpty()
  @IsString()
  id_categoria: string;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  descricao: string;

  @IsNotEmpty()
  @IsDecimal()
  preco_base: number;
}
