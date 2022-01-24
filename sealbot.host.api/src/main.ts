import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const builder = new DocumentBuilder()
    .setTitle('SealBot Host Api')
    .setDescription('')
    .setVersion('1.0')
    .addBearerAuth(
      {
        description: "token for twitch authentication",
        name: 'Authorization',
        bearerFormat: 'bearer',
        type: 'http',
        in: 'Header'
      },
      'access-token'
    )
    .build()

  const document = SwaggerModule.createDocument(app, builder);
  SwaggerModule.setup('/', app, document);

  const configService = app.get<ConfigService>(ConfigService);
  const corsAllowList = JSON.parse(configService.get('Cors_Allow_List'));

  app.enableCors({
    origin: corsAllowList,
    credentials: false
  });

  await app.listen(3000);
}
bootstrap();
