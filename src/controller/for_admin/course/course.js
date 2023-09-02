const course = require("../../../model/for_admin/course")
const Joi = require("joi")
const {v4:uuid} = require("uuid");

const addcourse= async (req, res) =>{
    try{
        const {title, descr} = req.body

        const {image} = req.files
        const scheme = Joi.object({
            title:Joi.string().max(150).required(),
            descr:Joi.string().required(),            
        });
    
        const {error} = scheme.validate({title, descr})
    
        if(error){
            return res.status(400).json({message:error.message})
        }

        const format = image.mimetype.split("/")[1];
    
      const ImageLink = `${uuid()}` + `.${format}`;

      
      const path = `${process.cwd()}/src/upload/${ImageLink}`;
    
        const newcourse = await course.addnew(title, descr,ImageLink)

        image.mv(path)
    
        return res.status(201).json({message:"Created", newcourse})
        
        
    }catch(error){
        return res.status(404).json({message:"Permission denied", error})
        // console.log(error.message);
    }
}


const   Editcourse = async ( req, res ) => {
    try{
     const { title, descr} = req.body;
     const { image } = req.files;
     const { id } = req.params;
     

     if(!id){
        return res.status(403).json({message:"Not found"})
     }
   
     const scheme = Joi.object({
        title:Joi.string().max(150).required(),
        descr:Joi.string().required(),
        
     });
   
     const { error } = scheme.validate({ title, descr});
   
     if (error) return res.status(403).json({ message: error.message });
     const format = image.mimetype.split("/")[1];
         const ImageLink = uuid() + `.${format}`;
         const path = `${process.cwd()}/src/upload/${ImageLink}`;
   
     const courses = await course.editcourse(
      title, descr, ImageLink, id
     );
     image.mv(path)
   
     return res.status(201).json({ message: "edit success", newcourse: courses });
    }catch(error){
   return res.status(404 ).json({message:"Permission denied"})
//    console.log(error.message);
    }
   }

const getcourse = async (req, res) =>{
    try{
const courses = await course.courseget()
return res.status(200).json({message:courses})
    }catch(error){
return res.status(404).json({message:"Permission denied"})
    }
}


const getcoursebyid = async (req, res) =>{
    try{

        const {id} = req.params
const courses = await course.byidgetcourse(id)
return res.status(200).json({message:courses})
    }catch(error){
return res.status(404).json({message:"Permission denied"})
    }
}

const Deletecourse = async (req, res) =>{
    try{

        const {id} = req.params
const courses = await course.coursedelete(id)
return res.status(200).json({message:"Success deleted"})
    }catch(error){
return res.status(404).json({message:"Permission denied"})
    }
}


module.exports = {
    addcourse,
    Editcourse,
    getcourse,
    getcoursebyid,
    Deletecourse
}