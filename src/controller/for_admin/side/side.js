const Side = require("../../../model/for_admin/side")
const Joi = require("joi")
const {v4:uuid} = require("uuid");


const addSide= async (req, res) =>{
    try{
        const {title, descr} = req.body

        const {image} = req.files
        const scheme = Joi.object({
            title:Joi.string().max(150).required(),
            descr:Joi.string().required(),
            
        })
    
        const {error} = scheme.validate({title, descr})
    
        if(error){
            return res.status(400).json({message:error.message})
        }

        const format = image.mimetype.split("/")[1];
    
         const ImageLink = `${uuid()}` + `.${format}`;

      
      const path = `${process.cwd()}/src/upload/${ImageLink}`;
    
        const sideide = await Side.addSide(title, descr,ImageLink)

        image.mv(path)
    
        return res.status(201).json({message:"Created", sideide})
        
        
    }catch(error){
        return res.status(404).json({message:"Permission denied", error})
    }
}

const   EditSide = async ( req, res ) => {
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
   
     const sides = await Side.editside(
      title, descr, ImageLink, id
     );
     image.mv(path)
   
     return res.status(201).json({ message: "edit success", newside: sides });
    }catch(error){
   return res.status(404 ).json({message:"Permission denied"})
//    console.log(error.message);
    }
   }

const getside = async (req, res) =>{
    try{
const sides = await Side.sideget()
return res.status(200).json({message:sides})
    }catch(error){
return res.status(404).json({message:"Permission denied"})
    }
}


const Deleteside = async (req, res) =>{
    try{

        const {id} = req.params
const sides = await Side.sidedelete(id)
return res.status(200).json({message:"Success deleted"})
    }catch(error){
return res.status(404).json({message:"Permission denied"})
    }
}

module.exports = {
    addSide,
    EditSide,
    Deleteside,
    getside
}