import { Injectable } from '@nestjs/common';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacoe.dto';

@Injectable()
export class AvaliacoesService {
  create(createAvaliacoeDto: CreateAvaliacaoDto) {
    return 'This action adds a new avaliacoe';
  }

  findAll() {
    return `This action returns all avaliacoes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} avaliacoe`;
  }

  update(id: number, updateAvaliacoeDto: UpdateAvaliacaoDto) {
    return `This action updates a #${id} avaliacoe`;
  }

  remove(id: number) {
    return `This action removes a #${id} avaliacoe`;
  }
}
