import Users from "../models/register.js";
import encrypt from 'encryptjs';

export const userAuthentication = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email) return res.send("email is require");
        if (!password) return res.send("password is require");

        let secretkey = 'vrushabh';

        const response = await Users.find({ email }).exec();

        if (!response.length) return res.send("user not found in middleware");

        const decipherPassword = encrypt.decrypt(response[0].password, secretkey, 256);
        
       if (decipherPassword != password) return res.send("incorrect password found in middleware");
       
        next();

    } catch (err) {
        return res.send(err);
    }
}