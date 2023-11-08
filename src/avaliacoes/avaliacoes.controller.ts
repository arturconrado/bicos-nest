import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { AvaliacoesService } from './avaliacoes.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacoe.dto';

@Controller('avaliacoes')
export class AvaliacoesController {
  constructor(private readonly avaliacoesService: AvaliacoesService) {}

  @Post()
  create(@Body() createAvaliacaoDto: CreateAvaliacaoDto) {
    return this.avaliacoesService.create(createAvaliacaoDto);
  }

  @Get()
  findAll() {
    return this.avaliacoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.avaliacoesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateAvaliacaoDto: UpdateAvaliacaoDto) {
    return this.avaliacoesService.update(id, updateAvaliacaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.avaliacoesService.remove(id);
  }
}
