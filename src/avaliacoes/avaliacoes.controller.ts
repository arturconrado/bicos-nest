import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AvaliacoesService } from './avaliacoes.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacoe.dto';

@Controller()
export class AvaliacoesController {
  constructor(private readonly avaliacoesService: AvaliacoesService) {}

  @MessagePattern('createAvaliacoe')
  create(@Payload() createAvaliacoeDto: CreateAvaliacaoDto) {
    return this.avaliacoesService.create(createAvaliacoeDto);
  }

  @MessagePattern('findAllAvaliacoes')
  findAll() {
    return this.avaliacoesService.findAll();
  }

  @MessagePattern('findOneAvaliacoe')
  findOne(@Payload() id: number) {
    return this.avaliacoesService.findOne(id);
  }

  @MessagePattern('updateAvaliacoe')
  update(@Payload() updateAvaliacoeDto: UpdateAvaliacaoDto) {
    return this.avaliacoesService.update(
      updateAvaliacoeDto.id,
      updateAvaliacoeDto,
    );
  }

  @MessagePattern('removeAvaliacoe')
  remove(@Payload() id: number) {
    return this.avaliacoesService.remove(id);
  }
}
