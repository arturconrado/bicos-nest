import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgendamentosService } from './agendamentos.service';
import { AgendamentosController } from './agendamentos.controller';
import { Agendamento } from './entities/agendamento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Agendamento])],
  controllers: [AgendamentosController],
  providers: [AgendamentosService],
})
export class AgendamentosModule {}
