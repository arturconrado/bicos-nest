import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UsuarioService } from './users.service';
import { Usuario } from './user.entity';

@Controller('users')
export class UsuarioController {
  constructor(private readonly usersService: UsuarioService) {}

  @Post()
  async create(@Body() userData: Usuario): Promise<Usuario> {
    return this.usersService.create(userData);
  }

  @Get()
  async findAll(): Promise<Usuario[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Usuario> {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() userData: Partial<Usuario>,
  ): Promise<Usuario> {
    return this.usersService.update(id, userData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.usersService.remove(id);
  }
}
