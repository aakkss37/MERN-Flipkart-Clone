import Users from "../modal/usersSchema.js"

export const userSignup = async (request, responce) => {
	// console.log("request received ===> ",request.body)
	try {
		const exist = await Users.findOne({ email: request.body.email })
		if (exist) {
			return responce.status(401).json({ msg: "Email already exist. Please Login or use different email." });
		}
		// console.log("inside try ===> *****$$$$$*******")
		const newUser = await Users.create(request.body);
		newUser.save();
		// console.log("after create=====------> ")
		return responce.status(201).json(newUser);
	} catch (error) {
		return responce.status(403).json({ msg: error.message });
	}
}