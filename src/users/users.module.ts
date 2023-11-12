import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioController } from './users.controller'; // Importe o controlador
import { UsuarioService } from './users.service'; // Importe o serviço
import { Usuario } from './user.entity'; // Importe a entidade

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario]), // Adicione isso para injetar o repositório
  ],
  controllers: [UsuarioController], // Adicione o controlador
  providers: [UsuarioService],
  exports: [UsuarioService],
})
export class UsuarioModule {}
