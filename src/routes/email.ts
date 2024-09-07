import { getEmails, createEmail } from "../controllers/email";

export default async function (app, opts) {
	app.get("/email", getEmails, createEmail);
}
