import { Module } from '@nestjs/common';
import { LoanDetailService } from './loan-detail.service';
import { LoanDetailController } from './loan-detail.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [LoanDetailController],
  providers: [LoanDetailService, PrismaService],
})
export class LoanDetailModule {}
