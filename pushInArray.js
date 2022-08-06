const Role = require("../src/models/Role");
require("dotenv").config();
require("../src/database")();
(async () => {
	try {
		const data = await Role.updateMany(
			{ $or: [{ title: "seller" }, { title: "secondary seller" }] },
			{ $push: { permissions: "update-invoice" } }
		);
		// eslint-disable-next-line no-console
		console.log(data);
		// eslint-disable-next-line no-console
		console.log("----- Seller Permission Updated Successfully -----");

		process.exit();
	} catch (error) {
		// eslint-disable-next-line no-console
		console.log("Error ", error);
	}
})();
