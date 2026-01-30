import 'dotenv/config';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private _return: any;
  public get return(): any {
    return this._return;
  }
  public set return(value: any) {
    this._return = value;
  }
  async onModuleInit() {
    await this.$connect();
  }
}
