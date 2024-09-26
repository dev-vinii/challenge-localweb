import {
  getEmails,
  createEmail,
  updateEmail,
  deleteEmail,
  getSpam,
} from "../controllers/email";

import { FastifyInstance } from "fastify";

export default async function emailRoutes(app: FastifyInstance) {
  app.get("/email", async (request, reply) => {
    return getEmails(request, reply);
  });
  app.get("/email/spam", async (request, reply) => {
    return getSpam(request, reply);
  });
  app.post("/email", async (request, reply) => {
    return createEmail(request, reply);
  });
  app.put("/email/:id", async (request, reply) => {
    return updateEmail(request, reply);
  });
  app.delete("/email/:id", async (request, reply) => {
    return deleteEmail(request, reply);
  });
}
