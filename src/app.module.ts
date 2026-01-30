import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PrismaModule } from './prisma/prisma.module';
import { BooksModule } from './books/books.module';
import { MembersModule } from './members/members.module';
import { LoanModule } from './loan/loan.module';
import { LoanDetailModule } from './loandetail/loan-detail.module';
import { AuthModule } from './auth/auth.module';
import { ReturnModule } from './return/return.module';

@Module({
  imports: [
    // 🌍 ENV CONFIG (dev & production)
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === 'production' ? '.env.production' : '.env',
    }),

    // 📦 APP MODULES
    PrismaModule,
    BooksModule,
    MembersModule,
    LoanModule,
    LoanDetailModule,
    AuthModule,
    ReturnModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
