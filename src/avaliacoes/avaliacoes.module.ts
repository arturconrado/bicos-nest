import { Module } from '@nestjs/common';
import { AvaliacoesService } from './avaliacoes.service';
import { AvaliacoesController } from './avaliacoes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Avaliacao } from './entities/avaliacoe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Avaliacao])],
  controllers: [AvaliacoesController],
  providers: [AvaliacoesService],
})
export class AvaliacoesModule {}
