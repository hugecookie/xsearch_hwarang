import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './user/users.module';
// import { typeORMConfig } from './configs/typeorm.config'
// import { User } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'hugecookie',
      password: '1331',
      database: 'postgresdb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // always use in developer
    }),
    UsersModule,
  ],
})
export class AppModule {}
