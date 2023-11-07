import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller'; // Importe o controlador
import { UsersService } from './users.service'; // Importe o serviço
import { User } from './user.entity'; // Importe a entidade

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // Adicione isso para injetar o repositório
  ],
  controllers: [UsersController], // Adicione o controlador
  providers: [UsersService],
})
export class UsersModule {}
