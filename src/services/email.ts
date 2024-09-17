import { Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma-client";

async function getAllEmails() {
  return prisma.email.findMany();
}

async function getSpamEmails() {
  return prisma.email.findMany({
    where: { isSpam: true },
  });
}

async function createNewEmail(data: Prisma.EmailCreateInput) {
  if (isSpam(data.body)) {
    return prisma.email.create({
      data: {
        ...data,
        sentAt: new Date(),
        isSpam: true,
      },
    });
  }
  return prisma.email.create({
    data: {
      ...data,
      sentAt: new Date(),
    },
  });
}

async function updateEmailById(id: string, data: Prisma.EmailUpdateInput) {
  return prisma.email.update({
    where: { id: parseInt(id) },
    data,
  });
}

async function deleteEmailById(id: string) {
  return prisma.email.update({
    where: { id: parseInt(id) },
    data: { deletedAt: new Date() },
  });
}

const spamKeywords = [
  "grátis",
  "ganhar",
  "dinheiro",
  "prêmio",
  "urgente",
  "oferta limitada",
  "apenas hoje",
  "clique aqui",
  "promoção",
  "melhor preço",
  "compre agora",
];

function isSpam(emailContent: string): boolean {
  return spamKeywords.some((keyword) =>
    emailContent.toLowerCase().includes(keyword),
  );
}

export {
  getAllEmails,
  createNewEmail,
  updateEmailById,
  deleteEmailById,
  getSpamEmails,
};
