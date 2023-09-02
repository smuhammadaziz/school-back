const Users = require("../../../model/for_admin/users")
const Joi = require("joi")
const {v4:uuid} = require("uuid");
const bcrypt = require("bcrypt");



const addUser = async (req, res) => {
    try{
      const { name, l_name, age, email, password, role, subject, num, lett} = req.body;

      const {image} = req.files
      const scheme = Joi.object({
        name: Joi.string().min(1).max(32).required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        role: Joi.string()
          .valid('teacher', 'direktor','zauch','zamdirektor')
          .required(),
          l_name:Joi.string().required(),
          age:Joi.number().required(),
          subject:Joi.string().required(),
          num:Joi.number().max(11),
          lett:Joi.string().max(1)
      });

      const { error } = scheme.validate({ name,email,password,role, l_name, age , subject, num, lett });
      
      if (error) {
        return res.status(400).json({ message: error.message });
      }
      const user = await Users.findbyemail(email);
      if (user) {
        return res.status(400).json({ message: "User already exists" });
      }

      const class_id = await Users.numletcheck(num, lett)
   

      
      const format = image.mimetype.split("/")[1];
    
      const ImageLink = `${uuid()}` + `.${format}`;

      
      const path = `${process.cwd()}/src/upload/${ImageLink}`;
      const hashpassword = await bcrypt.hash(password, 12);
      // console.log(hashpassword);
      const newUser = await Users.adduser(name, l_name, age, email, hashpassword, role, subject, num, lett,ImageLink,class_id.class_id);
      image.mv(path);
      return res.status(200).json({ message: "success", newUser });
    }catch(error){
  return res.status(404).json({message: error.message})
  }};

  module.exports = {addUser}