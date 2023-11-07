import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { Tarefa } from './tarefa.entity';

@Controller('tarefas')
export class TarefasController {
  constructor(private readonly tarefasService: TarefasService) {}

  @Get()
  findAll(): Promise<Tarefa[]> {
    return this.tarefasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Tarefa> {
    return this.tarefasService.findOne(id);
  }

  @Post()
  create(@Body() tarefaData: Partial<Tarefa>): Promise<Tarefa> {
    return this.tarefasService.create(tarefaData);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() tarefaData: Partial<Tarefa>,
  ): Promise<Tarefa> {
    return this.tarefasService.update(id, tarefaData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.tarefasService.remove(id);
  }
}
