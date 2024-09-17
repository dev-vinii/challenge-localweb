import {
  getAllEmails,
  createNewEmail,
  updateEmailById,
  deleteEmailById,
  getSpamEmails,
} from "../services/email";

async function getEmails(req, res) {
  const emails = await getAllEmails();
  res.send(emails);
}

async function getSpam(req, res) {
  const spamEmails = await getSpamEmails();
  res.send(spamEmails);
}

async function createEmail(req, res) {
  const { subject, body, sentTo, sentFrom, sentReply } = req.body;
  const newEmail = await createNewEmail({
    subject,
    body,
    sentTo,
    sentFrom,
    sentReply,
  });
  res.send(newEmail);
}

async function updateEmail(req, res) {
  const { id } = req.params;
  const { subject, body, sentTo, sentFrom, sentReply } = req.body;
  const email = await updateEmailById(id, {
    subject,
    body,
    sentTo,
    sentFrom,
    sentReply,
  });
  res.send(email);
}

async function deleteEmail(req, res) {
  const { id } = req.params;
  const email = await deleteEmailById(id);
  res.send(email);
}

export { getEmails, createEmail, updateEmail, deleteEmail, getSpam };
