const News = require("../../../model/for_admin/news")
const Joi = require("joi")
const {v4:uuid} = require("uuid");


const addNews= async (req, res) =>{
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
    
        const newNews = await News.addnew(title, descr,ImageLink)

        image.mv(path)
    
        return res.status(201).json({message:"Created", newNews})
        
        
    }catch(error){
        return res.status(404).json({message:"Permission denied", error})
        // console.log(error.message);
    }
}


const   EditNews = async ( req, res ) => {
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
   
     const Newss = await News.editnews(
      title, descr, ImageLink, id
     );
     image.mv(path)
   
     return res.status(201).json({ message: "edit success", newNews: Newss });
    }catch(error){
   return res.status(404 ).json({message:"Permission denied"})
//    console.log(error.message);
    }
   }

const getNews = async (req, res) =>{
    try{
const Newss = await News.newsget()
return res.status(200).json({message:Newss})
    }catch(error){
return res.status(404).json({message:"Permission denied"})
    }
}


const getNewsbyid = async (req, res) =>{
    try{

        const {id} = req.params
const Newss = await News.byidgetnews(id)
return res.status(200).json({message:Newss})
    }catch(error){
return res.status(404).json({message:"Permission denied"})
    }
}

const DeleteNews = async (req, res) =>{
    try{

        const {id} = req.params
const Newss = await News.newsdelete(id)
return res.status(200).json({message:"Success deleted"})
    }catch(error){
return res.status(404).json({message:"Permission denied"})
    }
}


module.exports = {
    addNews,
    EditNews,
    getNews,
    getNewsbyid,
    DeleteNews
}