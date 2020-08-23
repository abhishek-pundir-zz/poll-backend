const jwt = require("jsonwebtoken");
const APP_SECRET = "KL_0S$afDh{xuLX%/Rnlw>At|]%gC";

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
