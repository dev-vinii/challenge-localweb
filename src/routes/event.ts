import { FastifyInstance } from "fastify";
import {
  createEvent,
  deleteEvent,
  getEvents,
  updateEvent,
} from "../controllers/event";

export default async function eventRoutes(app: FastifyInstance) {
  app.get("/event", async (request, reply) => {
    return getEvents(request, reply);
  });
  app.post("/event", async (request, reply) => {
    return createEvent(request, reply);
  });
  app.put("/event/:id", async (request, reply) => {
    return updateEvent(request, reply);
  });
  app.delete("/event/:id", async (request, reply) => {
    return deleteEvent(request, reply);
  });
}
