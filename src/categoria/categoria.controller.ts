import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Controller()
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @MessagePattern('createCategoria')
  create(@Payload() createCategoriaDto: CreateCategoriaDto) {
    return this.categoriaService.create(createCategoriaDto);
  }

  @MessagePattern('findAllCategoria')
  findAll() {
    return this.categoriaService.findAll();
  }

  @MessagePattern('findOneCategoria')
  findOne(@Payload() id: number) {
    return this.categoriaService.findOne(id);
  }

  @MessagePattern('updateCategoria')
  update(@Payload() updateCategoriaDto: UpdateCategoriaDto) {
    return this.categoriaService.update(
      updateCategoriaDto.id,
      updateCategoriaDto,
    );
  }

  @MessagePattern('removeCategoria')
  remove(@Payload() id: number) {
    return this.categoriaService.remove(id);
  }
}
