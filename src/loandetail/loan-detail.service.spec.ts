import { Test, TestingModule } from '@nestjs/testing';
import { LoanDetailService } from './loan-detail.service';
import { PrismaService } from 'src/prisma/prisma.service';

describe('LoanDetailService', () => {
  let service: LoanDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoanDetailService, PrismaService],
    }).compile();

    service = module.get<LoanDetailService>(LoanDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
