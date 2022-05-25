import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BooksmarkModule } from './booksmark/booksmark.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, UserModule, BooksmarkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
