const {users: service} = require("../../services");

const login = async (req, res, next) => {
    const {email, password} = req.body;
    try {
        const user = await service.getOne({email});
        if(!user || user.password !== password){
            return res.status(400).json({
                status: "error",
                code: 400,
                message: "Incorrect email or password"
            })
        }
        const token = "fdgfhsdfsd.ssfgsdfsdfs.sdfssdfdsfd";
        res.json({
            status: "error",
            code: 200,
            data: {
                token
            }
        })
    }
    catch(error){
        next(error);
    }
}

module.exports = login;