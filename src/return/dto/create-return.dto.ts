import { IsInt, IsDateString } from 'class-validator';

export class CreateReturnDto {
  @IsInt()
  loanId: number;
  @IsDateString()
  returnDate: string;
}
