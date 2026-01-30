import { IsOptional, IsDateString } from 'class-validator';
import { LoanStatus } from '@prisma/client';

export class UpdateLoanDto {
  @IsOptional()
  @IsDateString()
  dueDate?: string;

  @IsOptional()
  @IsDateString()
  returnDate?: string;

  @IsOptional()
  status?: LoanStatus;
}
