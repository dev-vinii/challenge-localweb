import { FastifyInstance } from "fastify";
import {
  createEvent,
  deleteEvent,
  getEvents,
  updateEvent,
} from "../controllers/event";

export default async function eventRoutes(fastify: FastifyInstance) {
  fastify.get("/event", async (request, reply) => {
    return getEvents(request, reply);
  });
  fastify.post("/event", async (request, reply) => {
    return createEvent(request, reply);
  });
  fastify.put("/event/:id", async (request, reply) => {
    return updateEvent(request, reply);
  });
  fastify.delete("/event/:id", async (request, reply) => {
    return deleteEvent(request, reply);
  });
}
