import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const owner = await prisma.user.upsert({
    where: { email: "admin@sorteiosolidario.local" },
    update: {},
    create: {
      name: "Administrador",
      email: "admin@sorteiosolidario.local",
      phone: "11999999999",
      role: "OWNER"
    }
  });

  const organization = await prisma.organization.upsert({
    where: { slug: "comunidade-exemplo" },
    update: {},
    create: {
      name: "Comunidade Exemplo",
      slug: "comunidade-exemplo",
      pixKey: "pix@comunidade.local",
      members: {
        create: {
          userId: owner.id,
          role: "OWNER"
        }
      }
    }
  });

  const campaign = await prisma.campaign.upsert({
    where: {
      organizationId_slug: {
        organizationId: organization.id,
        slug: "reforma-do-salao"
      }
    },
    update: {},
    create: {
      organizationId: organization.id,
      createdById: owner.id,
      title: "Acao entre amigos - Reforma do salao",
      slug: "reforma-do-salao",
      description: "Campanha para apoiar a reforma do salao comunitario.",
      prize: "Cesta especial solidaria",
      numberPriceCents: 2000,
      totalNumbers: 500,
      status: "ACTIVE",
      drawDate: new Date("2026-06-22T21:00:00-03:00")
    }
  });

  const existingNumbers = await prisma.raffleNumber.count({
    where: { campaignId: campaign.id }
  });

  if (existingNumbers === 0) {
    await prisma.raffleNumber.createMany({
      data: Array.from({ length: campaign.totalNumbers }, (_, index) => ({
        campaignId: campaign.id,
        number: index + 1
      }))
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
