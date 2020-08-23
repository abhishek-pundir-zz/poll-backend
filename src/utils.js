require("dotenv").config();

const jwt = require("jsonwebtoken");
const APP_SECRET = process.env.APP_SECRET;

function getUserId(context) {
	const authorized = context.request.get("Authorization");

	if (authorized) {
		const token = authorized.replace("Bearer ", "");
		const { userId } = jwt.verify(token, APP_SECRET);
		return userId;
	}

	throw new Error("Not Authroized");
}

module.exports = {
	APP_SECRET,
	getUserId,
};
