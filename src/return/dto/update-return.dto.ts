import { IsOptional, IsDateString } from 'class-validator';

export class UpdateReturnDto {
  @IsOptional()
  @IsDateString()
  returnDate?: string;
}
