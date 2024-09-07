import { getEmails, createEmail } from "../controllers/email";

import { FastifyInstance } from "fastify";

export default async function emailRoutes(fastify: FastifyInstance) {
	fastify.get("/email", async (request, reply) => {
		return getEmails(request, reply);
	});
	fastify.post("/email", async (request, reply) => {
		return createEmail(request, reply);
	});
}
