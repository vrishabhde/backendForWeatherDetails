import Users from "../models/register.js";
import encrypt from 'encryptjs';
import axios from "axios";


export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name) return res.send("name is require");
        if (!email) return res.send("email is require");
        if (!password) return res.send("password is require");

        const response = await Users.find({ email }).exec();
        if (response.length) return res.send("user already exist");

        let secretkey = 'vrushabh';
        let plaintext = password;

        const decipher = encrypt.encrypt(plaintext, secretkey, 256);

        const user = new Users({
            name: name,
            email: email,
            password: decipher,
        });
        user.save();
        return res.send("registered success");

    } catch (err) {
        return res.send(err);
    }
}

export const getTemperature = async (req, res) => {

    try {
 
        const { city } = req.body;

        const keyForweather = '5e535c5d2e97441b48f05298bca3f262';

        const response = await axios.post(`http://api.weatherstack.com/forecast?access_key=${keyForweather}&query=${city}`);
        // console.log(response);

       return res.send(response.data.current.temperature.toString());


    } catch (err) {
        return res.send(err);
    }
}


export const getAstro = async (req, res) => {
    try{
        const {city} = req.body;

        const keyForweather = '5e535c5d2e97441b48f05298bca3f262';

        const response = await axios.post(`http://api.weatherstack.com/forecast?access_key=${keyForweather}&query=${city}`);

        return res.send(response.data.current.windspeed.toString());

    }catch(err){
        return res.send(err);
    }
}

