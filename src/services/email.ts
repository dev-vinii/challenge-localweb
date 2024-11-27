import { Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma-client";

class EmailService {
  private static spamKeywords = [
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

  static async getAllEmails() {
    return prisma.email.findMany();
  }

  static async getSpamEmails() {
    return prisma.email.findMany({
      where: { isSpam: true },
    });
  }

  static async createNewEmail(data: Prisma.EmailCreateInput) {
    const isSpam = this.isSpam(data.body);
    return prisma.email.create({
      data: {
        ...data,
        sentAt: new Date(),
        isSpam,
      },
    });
  }

  static async updateEmailById(id: string, data: Prisma.EmailUpdateInput) {
    return prisma.email.update({
      where: { id: parseInt(id) },
      data,
    });
  }

  static async deleteEmailById(id: string) {
    return prisma.email.update({
      where: { id: parseInt(id) },
      data: { deletedAt: new Date() },
    });
  }

  private static isSpam(emailContent: string): boolean {
    return this.spamKeywords.some((keyword) =>
      emailContent.toLowerCase().includes(keyword),
    );
  }
}

export default EmailService;
