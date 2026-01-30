import { IsOptional, IsInt, Min } from 'class-validator';

export class UpdateLoanDetailDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  qty?: number;
}
