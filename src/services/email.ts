import { prisma } from "../lib/prisma-client";

async function getAllEmails() {
	return prisma.email.findMany();
}

async function createNewEmail(data) {
	return prisma.email.create({
		data: {
			...data,
			sentAt: new Date(),
		},
	});
}

async function updateEmailById(id, data) {
	return prisma.email.update({
		where: { id: parseInt(id) },
		data,
	});
}

async function deleteEmailById(id) {
	return prisma.email.delete({
		where: { id: parseInt(id) },
	});
}

export { getAllEmails, createNewEmail, updateEmailById, deleteEmailById };
