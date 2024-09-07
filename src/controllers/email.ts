import { prisma } from "../lib/prisma-client";

async function getEmails(req, res) {
	const emails = prisma.email.findMany();
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

async function updateEmail(req, res) {
	const { id } = req.params;
	const { subject, body, sentTo, sentFrom, sentReply } = req.body;
	const email = await prisma.email.update({
		where: {
			id: parseInt(id),
		},
		data: {
			subject,
			body,
			sentTo,
			sentFrom,
			sentReply,
		},
	});
	res.send(email);
}

async function deleteEmail(req, res) {
	const { id } = req.params;
	const email = await prisma.email.delete({
		where: {
			id: parseInt(id),
		},
	});
	res.send(email);
}

export { getEmails, createEmail, deleteEmail, updateEmail };
