import { Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma-client";

async function getAllEmails() {
  return prisma.email.findMany();
}

async function createNewEmail(data: Prisma.EmailCreateInput) {
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

export { getAllEmails, createNewEmail, updateEmailById, deleteEmailById };
