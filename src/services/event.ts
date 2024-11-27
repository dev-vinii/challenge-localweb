import { Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma-client";

class EventService {
  static async getAllEvents() {
    return prisma.event.findMany();
  }

  static async createNewEvent(data: Prisma.EventCreateInput) {
    return prisma.event.create({
      data: {
        ...data,
        createdAt: new Date(),
      },
    });
  }

  static async updateEventById(id: string, data: Prisma.EventUpdateInput) {
    return prisma.event.update({
      where: { id: parseInt(id) },
      data,
    });
  }

  static async deleteEventById(id: string) {
    return prisma.event.update({
      where: { id: parseInt(id) },
      data: { deletedAt: new Date() },
    });
  }
}

export default EventService;
