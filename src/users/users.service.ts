import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './user.entity';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usersRepository: Repository<Usuario>,
  ) {}

  async create(userData: Usuario): Promise<Usuario> {
    const salt = await bcrypt.genSalt();
    userData.senha = await bcrypt.hash(userData.senha, salt);
    userData.id = uuidv4(); // Atribui um UUIDv4 ao id do usuário
    return this.usersRepository.save(userData);
  }

  async findAll(): Promise<Usuario[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<Usuario> {
    // @ts-expect-error
    return this.usersRepository.findOne(id);
  }

  async update(id: number, userData: Partial<Usuario>): Promise<Usuario> {
    await this.usersRepository.update(id, userData);
    // @ts-expect-error
    return this.usersRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
