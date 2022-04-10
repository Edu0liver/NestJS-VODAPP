import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'
import { randomUUID } from 'crypto'
const prisma = new PrismaClient()

async function main() {
  await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
        id: randomUUID(),
        username: "Edudu",
        email: "edudu@email.com",
        password: await hash("1234", 16),
        is_admin: true,
        subscribed: true,
        created_at: new Date()
    },
  })
}

main()