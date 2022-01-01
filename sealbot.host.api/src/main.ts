import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { HttpExceptionFilter} from './modules/core/filters/http-exception-filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const builder = new DocumentBuilder()
    .setTitle('Seal Bot Host Api')
    .setDescription('Api server for sealbot to handle domain of twitch host')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, builder);
  SwaggerModule.setup('/', app, document);

  app.useGlobalFilters(new HttpExceptionFilter());
  
  app.enableCors({
    origin: 'http://localhost:4200',
    credentials: false
  });

  await app.listen(3000);
}
bootstrap();
