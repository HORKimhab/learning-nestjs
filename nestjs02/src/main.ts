import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as portscanner from 'portscanner';

async function bootstrap() {
  const port = 3000;
  // const host = '127.0.0.1'; // specify the host
  const availablePort = await findAvailablePort(port);
  if (availablePort === -1) {
    console.error(`No available ports found starting from port ${port}`);
    return;
  }
  const app = await NestFactory.create(AppModule);
  try {
    await app.listen(availablePort);
    console.log(`Application is listening on port ${availablePort}`);
  } catch (err) {
    console.error('An error occurred:', err);
  }
}

async function findAvailablePort(startPort: number, host: string = 'localhost'): Promise<number> {
  return new Promise<number>((resolve) => {
    portscanner.findAPortNotInUse(startPort, 65535, host, (err, port) => {
      if (err) {
        console.error('Error finding available port:', err);
        resolve(-1);
      } else {
        resolve(port);
      }
    });
  });
}

bootstrap();
