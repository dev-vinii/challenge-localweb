import EmailService from "@/services/email";

class EmailController {
  static async getEmails(req, res) {
    try {
      const emails = await EmailService.getAllEmails();
      res.send(emails);
    } catch (error) {
      res.status(500).send({ error: "Error fetching emails." });
    }
  }

  static async getSpam(req, res) {
    try {
      const spamEmails = await EmailService.getSpamEmails();
      res.send(spamEmails);
    } catch (error) {
      res.status(500).send({ error: "Error fetching spam emails." });
    }
  }

  static async createEmail(req, res) {
    try {
      const { subject, body, sentTo, sentFrom, sentReply } = req.body;
      const newEmail = await EmailService.createNewEmail({
        subject,
        body,
        sentTo,
        sentFrom,
        sentReply,
      });
      res.send(newEmail);
    } catch (error) {
      res.status(500).send({ error: "Error creating email." });
    }
  }

  static async updateEmail(req, res) {
    try {
      const { id } = req.params;
      const { subject, body, sentTo, sentFrom, sentReply } = req.body;
      const email = await EmailService.updateEmailById(id, {
        subject,
        body,
        sentTo,
        sentFrom,
        sentReply,
      });
      res.send(email);
    } catch (error) {
      res.status(500).send({ error: "Error updating email." });
    }
  }

  static async deleteEmail(req, res) {
    try {
      const { id } = req.params;
      const email = await EmailService.deleteEmailById(id);
      res.send(email);
    } catch (error) {
      res.status(500).send({ error: "Error deleting email." });
    }
  }
}

export default EmailController;
