import { Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma-client";

async function getAllEvents() {
  return prisma.event.findMany();
}

async function createNewEvent(data: Prisma.EventCreateInput) {
  return prisma.event.create({
    data: {
      ...data,
      createdAt: new Date(),
    },
  });
}

async function updateEventById(id: string, data: Prisma.EventUpdateInput) {
  return prisma.event.update({
    where: { id: parseInt(id) },
    data,
  });
}

async function deleteEventById(id: string) {
  return prisma.event.update({
    where: { id: parseInt(id) },
    data: { deletedAt: new Date() },
  });
}

export { getAllEvents, createNewEvent, updateEventById, deleteEventById };
