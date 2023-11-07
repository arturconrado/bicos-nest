import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TarefasModule } from './tarefas/tarefas.module';
import { ServicosModule } from './servicos/servicos.module';
import { Servico } from "./servicos/servico.entity";
import { Tarefa } from "./tarefas/tarefa.entity";

function Usuario() {

}

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Aqwe123!@',
      database: 'bicos',
      autoLoadEntities: true,
      entities: [Tarefa, Usuario, Servico],
      synchronize: false, // Not recommended for production
    }),
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'artur',
      signOptions: { expiresIn: '60s' },
    }),
    TarefasModule,
    ServicosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
