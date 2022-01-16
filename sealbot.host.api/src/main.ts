import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const builder = new DocumentBuilder()
    .setTitle('SealBot Host Api')
    .setDescription('')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, builder);
  SwaggerModule.setup('/', app, document);

  await app.listen(3000);
}
bootstrap();
