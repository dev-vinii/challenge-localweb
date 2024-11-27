import { FastifyInstance } from "fastify";
import EventController from "@/controllers/event";

export default async function eventRoutes(app: FastifyInstance) {
  app.get("/event", EventController.getEvents);
  app.post("/event", EventController.createEvent);
  app.put("/event/:id", EventController.updateEvent);
  app.delete("/event/:id", EventController.deleteEvent);
}
