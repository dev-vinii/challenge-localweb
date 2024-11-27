import { FastifyInstance } from "fastify";
import EmailController from "@/controllers/email";

export default async function emailRoutes(app: FastifyInstance) {
  app.get("/email", EmailController.getEmails);
  app.get("/email/spam", EmailController.getSpam);
  app.post("/email", EmailController.createEmail);
  app.put("/email/:id", EmailController.updateEmail);
  app.delete("/email/:id", EmailController.deleteEmail);
}
