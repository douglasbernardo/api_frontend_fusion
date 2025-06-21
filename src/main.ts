import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as process from 'process';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
   app.enableCors({
    origin: 'https://api-frontend-fusion.onrender.com', // ou '*', se quiser permitir todos (cuidado com isso em produção)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // se estiver usando cookies/autenticação
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove campos que não estão nos DTOs
      forbidNonWhitelisted: true, // lança erro se mandar campos extras
      transform: true, // transforma para os tipos corretos (ex: string -> number)
    }),
  );
  const port = 3000
  app.listen(process.env.PORT || port, '0.0.0.0', (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server is running on ${address}`);
  });
}
bootstrap();