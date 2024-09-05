import { getEmails } from "../controllers/email";

export default async function (app, opts) {
	app.get("/email", getEmails);
}
