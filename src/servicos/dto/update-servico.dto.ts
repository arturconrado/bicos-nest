import { IsOptional, IsString, IsDecimal } from 'class-validator';

export class UpdateServicoDto {
  @IsOptional()
  @IsString()
  id_categoria?: string;

  @IsOptional()
  @IsString()
  nome?: string;

  @IsOptional()
  @IsString()
  descricao?: string;

  @IsOptional()
  @IsDecimal()
  preco_base?: number;
}
