import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DatabaseService } from './shared/database/database.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const databaseService = app.get(DatabaseService);
  await databaseService.testConnection();
  await app.listen(4000);
  console.log('Application is running on http://localhost:4000');
}
bootstrap();
