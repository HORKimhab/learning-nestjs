import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { CompaniesModule } from './company/company.module';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    // type: 'mysql', 
    // host: 'localhost', 
    // port: 3306, 
    // username: 'root',
    // password: '', 
    // database: 'nestjs07_auth', 
    // entities: [join(__dirname, './**/*.entity{.ts,.js}')],
    // synchronize: true,
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'nestjs07_auth',
    retryAttempts: 10,
    retryDelay: 3000,
    entities: [__dirname + '/**/*.entity.ts'],
    autoLoadEntities: true,
    synchronize: false,
  }), SongsModule, CompaniesModule, PostModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
