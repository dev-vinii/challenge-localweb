import {
  getEmails,
  createEmail,
  updateEmail,
  deleteEmail,
  getSpam,
} from "../controllers/email";

import { FastifyInstance } from "fastify";

export default async function emailRoutes(fastify: FastifyInstance) {
  fastify.get("/email", async (request, reply) => {
    return getEmails(request, reply);
  });
  fastify.get("/email/spam", async (request, reply) => {
    return getSpam(request, reply);
  });
  fastify.post("/email", async (request, reply) => {
    return createEmail(request, reply);
  });
  fastify.put("/email/:id", async (request, reply) => {
    return updateEmail(request, reply);
  });
  fastify.delete("/email/:id", async (request, reply) => {
    return deleteEmail(request, reply);
  });
}
