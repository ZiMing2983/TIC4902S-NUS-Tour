import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nus_user',
      password: 'nus_password',
      database: 'nus_tour',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
