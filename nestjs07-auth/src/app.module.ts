import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { CompaniesModule } from './company/company.module';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql', 
    host: 'localhost', 
    port: 3306, 
    username: 'root',
    password: '', 
    database: 'nestjs07_auth', 
    entities: [join(__dirname, './**/*.entity{.ts,.js}')],
    synchronize: true,
  }), SongsModule, CompaniesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
