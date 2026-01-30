import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLoanDetailDto } from './dto/create-loandetail.dto';
import { UpdateLoanDetailDto } from './dto/update-loandetail.dto';

@Injectable()
export class LoanDetailService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateLoanDetailDto) {
    return this.prisma.loanDetail.create({
      data: {
        loanId: dto.loanId,
        bookId: dto.bookId,
        qty: dto.qty,
      },
    });
  }

  async findAll() {
    return this.prisma.loanDetail.findMany({
      include: {
        book: true,
        loan: true,
      },
    });
  }

  async findAllByLoan(loanId: number) {
    return this.prisma.loanDetail.findMany({
      where: { loanId },
      include: {
        book: true,
      },
    });
  }

  async findOne(id: number) {
    const detail = await this.prisma.loanDetail.findUnique({
      where: { id },
    });

    if (!detail) {
      throw new NotFoundException('Loan detail not found');
    }

    return detail;
  }

  async update(id: number, dto: UpdateLoanDetailDto) {
    await this.findOne(id);

    return this.prisma.loanDetail.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    await this.prisma.loanDetail.delete({
      where: { id },
    });

    return { message: `Loan detail with id ${id} deleted` };
  }
}
