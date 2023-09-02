const joi = require("joi")
const {findone} = require("../../model/auth/auth")
const bcrypt = require("bcrypt")
const {sign} = require("../../utils/jwt")
const Joi = require("joi")


const loginU = async(req, res) =>{
try{
    const {email, password} = req.body;

    const scheme = joi.object({
        email:Joi.string().email(),
        password:Joi.string().required()
    })
    
    const {error} = scheme.validate({email,password})
    
    
    if(error){
        return res.status(404).json({message:error.message})
    }
    
    const user = await findone(email)
    console.log(user);
    
    if(!user){
        return res.status(404).json({message:"Incorrect email or password"})
    }
    
    const verify = await bcrypt.compare(password, user.password);
   
    
    if(!verify){
        return res.status(404).json({message:"Incorrect email or password"})
    }
    const token = sign({id:user.user_id, role:user.role})
    
   
    
    return res.status(200).json({message:"success", token})
    
}catch(error){
return res.status(500).json({message:"Permission denied"})
// console.log(error.message);
}
}

module.exports = {loginU}


