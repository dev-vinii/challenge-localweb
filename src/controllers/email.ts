import { prisma } from "../database/prisma-client";

async function getEmails(req, res) {
	const emails = prisma.findMany({ emails: { orderBy: { sentAt: "desc" } } });
	res.send(emails);
}

async function createEmail(req, res) {
	const { subject, body, sentTo, sentFrom, sentReply } = req.body;
	const newEmail = await prisma.email.create({
		data: {
			subject,
			body,
			sentTo,
			sentFrom,
			sentReply,
			sentAt: new Date(),
		},
	});
	res.send(newEmail);
}

export { getEmails, createEmail };
