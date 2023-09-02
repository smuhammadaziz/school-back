const Joi = require("joi");
const Pupil = require("../../../model/for_users/pupils")
const jwt = require("jsonwebtoken")
const {v4:uuid} = require("uuid");


const addPupil = async (req, res) => {
    try{

      const token = await req.headers["authorization"].split(" ")[1];
      const {name, l_name, age, congr, descr} = req.body;
      
      const {image} = req.files
      
      const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    
   
    const id = decoded.id;
    console.log(id);
    // console.log(id);
    const scheme = Joi.object({
        name: Joi.string().min(1).max(32).required(),
          l_name:Joi.string().required(),
          age:Joi.number().required(),
      });

      const { error } = scheme.validate({ name, l_name, age  });
      
      if (error) {
        return res.status(400).json({ message: error.message });
      }


      
      const format = image.mimetype.split("/")[1];
    
      const ImageLink = `${uuid()}` + `.${format}`;

      
      const path = `${process.cwd()}/src/upload/${ImageLink}`;
    
      // console.log(hashpassword);
      const newUser = await Pupil.addpupil(name, l_name, age, congr, descr,ImageLink,id);
      image.mv(path);
      return res.status(200).json({ message: "success", newUser });
    }catch(error){
  return res.status(404).json({message: error.message})
  }};


  const EditPupil = async ( req, res ) => {
    try{
     const { name, l_name, age, congr, descr} = req.body;
     const { image } = req.files;
     const { id } = req.params;
   
   
     const scheme = Joi.object({
       name: Joi.string().required(),
       l_name: Joi.string().min(1).max(32).required(),
       age: Joi.number().min(1).max(32).required(),
       congr:Joi.boolean().required(),
     });
   
     const { error } = scheme.validate({ name,l_name, age, congr});
   
     if (error) return res.status(403).json({ message: error.message });
     const format = image.mimetype.split("/")[1];
         const ImageLink = uuid() + `.${format}`;
         const path = `${process.cwd()}/src/upload/${ImageLink}`;
   
     const Pupils = await Pupil.editpupil(
      name,l_name,age,congr,descr,ImageLink,id
     );
     image.mv(path)
   
     return res.status(201).json({ message: "edit success", newUsers: Pupils });
    }catch(error){
   // return res.status(404 ).json({message:"Permission denied"})
   console.log(error.message);
    }
   }

   const DeletePupil = async (req, res) =>{
  try{
    const {id} = req.params

    if(!id){
      return res.status(404).json({message:"Pupil not found"})
    }

    const Pupils = await Pupil.iddelete(id)

    return res.status(200).json({message:"delete success", deletedUSer: Pupils})
  }catch(error){
return res.status(404).json({message:"Permission denied"})
  }
   }


   const Getpupils = async (req, res) => {
    try{
      const token = await req.headers["authorization"].split(" ")[1];
      const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
      
     
      const id = decoded.id;
  
      const Pupils = await Pupil.getpupil(id)

      return res.status(200).json({message:Pupils})
  
    }catch(error){
      return res.status(404).json({message:"Permission denied"})
    }
    
   }

   const Getpupilbyid = async (req, res) => {
    try{
      const {id} =req.params
  
      const Pupils = await Pupil.idgetby(id)

      return res.status(200).json({message:Pupils})
  
    }catch(error){
      return res.status(404).json({message:"Permission denied"})
    }
    
   }


const GetBestuser = async (req, res) =>{
      try{
      const BestPupils = await Pupil.bestuserby()

      if(!BestPupils){
        return res.status(400).json({message:"Unday oquvchilar yoq !!"})
      }

      return res.status(200).json({message:BestPupils})
      }catch(error){
      return res.status(400).json({message:"Permission denied"})
      }
         }
      
  module.exports = {
    addPupil,
    EditPupil,
    DeletePupil,
    Getpupils,
    Getpupilbyid,
    GetBestuser
  }