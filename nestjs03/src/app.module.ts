import { TypeOrmModule } from '@nestjs/typeorm';
import { UserResolver } from './users/UserResolver';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { User } from './graphsql/models/User';
import { UserSetting } from './graphsql/models/UserSetting';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.ggl',
    }),
    // Register TypeOrmModule 
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'localhost', 
      port: 3306, 
      username: 'root',
      password: '', 
      database: 'nestjs_mysql_tutorial_nestjs03', 
      // entities: [User, Profile, Post], 
      entities: [User, UserSetting], 
      synchronize: true,
    }),
    UsersModule
  ],
  controllers: [],
  providers: [UserResolver],
  // providers: [UserResolver, UserSettingsResolver],
})
export class AppModule {}
