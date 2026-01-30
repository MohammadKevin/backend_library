import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { LoanDetailService } from './loan-detail.service';
import { CreateLoanDetailDto } from './dto/create-loandetail.dto';
import { UpdateLoanDetailDto } from './dto/update-loandetail.dto';

@Controller('loandetail')
export class LoanDetailController {
  constructor(private readonly loanDetailService: LoanDetailService) {}

  @Post()
  create(@Body() dto: CreateLoanDetailDto) {
    return this.loanDetailService.create(dto);
  }

  @Get()
  findAll() {
    return this.loanDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.loanDetailService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateLoanDetailDto,
  ) {
    return this.loanDetailService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.loanDetailService.remove(id);
  }
}
