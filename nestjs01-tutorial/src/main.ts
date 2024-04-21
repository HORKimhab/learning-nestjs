import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from "passport"
import { TypeormStore } from 'connect-typeorm';
import { SessionEntity } from './typeorm';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const dataSource = app.get(DataSource);
  const sessionRepository = dataSource.getRepository(SessionEntity);

  app.setGlobalPrefix('api');
  app.use(
    session({
      name: 'NESTJS_SESSION_ID',
      secret: 'ABCDKENNKEKALEKXEKSKEKKXSLEJAAJELLE9EIRIR9284903SNEN',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 60000, 
      }, 
      store: new TypeormStore({
        // cleanupLimit: 10
      }).connect(sessionRepository)
    }),
  );
  app.use(passport.initialize())
  app.use(passport.session())
  await app.listen(3000);

}
bootstrap();
