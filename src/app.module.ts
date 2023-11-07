import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";

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
      synchronize: true, // Not recommended for production
    }),
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'artur',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
