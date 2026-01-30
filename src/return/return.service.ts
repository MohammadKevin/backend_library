import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReturnDto } from './dto/create-return.dto';
import { UpdateReturnDto } from './dto/update-return.dto';

@Injectable()
export class ReturnService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateReturnDto) {
    return this.prisma.return.create({
      data: {
        loanId: dto.loanId,
        returnDate: new Date(dto.returnDate),
      },
    });
  }

  findAll() {
    return this.prisma.return.findMany({
      orderBy: { id: 'asc' },
      include: {
        loan: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.return.findUnique({
      where: { id },
      include: {
        loan: true,
      },
    });
  }

  update(id: number, dto: UpdateReturnDto) {
    return this.prisma.return.update({
      where: { id },
      data: {
        ...(dto.returnDate && {
          returnDate: new Date(dto.returnDate),
        }),
      },
    });
  }

  remove(id: number) {
    return this.prisma.return.delete({
      where: { id },
    });
  }
}
