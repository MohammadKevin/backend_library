import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('123456', 10);
  await prisma.user.createMany({
    data: [
      { username: 'admin', password, role: 'ADMIN' },
      { username: 'petugas', password, role: 'PETUGAS' },
      { username: 'member', password, role: 'MEMBER' },
    ],
    skipDuplicates: true,
  });
  console.log('Seed user berhasil');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
