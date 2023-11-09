import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TarefasModule } from './tarefas/tarefas.module';
import { ServicosModule } from './servicos/servicos.module';
import { Servico } from './servicos/servico.entity';
import { Tarefa } from './tarefas/tarefa.entity';
import { CategoriaModule } from './categoria/categoria.module';
import { Categoria } from './categoria/entities/categoria.entity';
import { PagamentosModule } from './pagamentos/pagamentos.module';
import { AvaliacoesModule } from './avaliacoes/avaliacoes.module';
import { AgendamentosModule } from './agendamentos/agendamentos.module';
import { Pagamento } from './pagamentos/entities/pagamento.entity';
import { Avaliacao } from './avaliacoes/entities/avaliacoe.entity';
import { Agendamento } from './agendamentos/entities/agendamento.entity';

function Usuario() {}

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '192.168.3.101',
      port: 5432,
      username: 'postgres',
      password: 'Aqwe123!@',
      database: 'bicos',
      autoLoadEntities: true,
      entities: [
        Tarefa,
        Usuario,
        Servico,
        Categoria,
        Pagamento,
        Avaliacao,
        Agendamento,
      ],
      synchronize: false, // Not recommended for production
    }),
    UsuarioModule,
    PassportModule,
    JwtModule.register({
      secret: 'artur',
      signOptions: { expiresIn: '60s' },
    }),
    TarefasModule,
    ServicosModule,
    CategoriaModule,
    PagamentosModule,
    AvaliacoesModule,
    AgendamentosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
