const Joi = require("joi")
const Users = require("../../../model/for_admin/class")
const joi = require("joi")

const AddClass = async(req,res) =>{
    try{
        const {num, lett, descr} = req.body

        const scheme = Joi.object({
            num:Joi.number().min(1).max(11).required(),
            lett:Joi.string().max(1).required(),
            descr:Joi.string().required()
        })
    
        const {error} = scheme.validate({num, lett, descr})
    
        if(error){
            return res.status(400).json({message:error.message})
        }
    
        const newclass = await Users.addclass(num, lett, descr)
    
        return res.status(201).json({message:"Created", newclass})
        
    }catch(error){
        return res.status(404).json({message:"Permission denied", error})
    }
} 

const ClassCount = async(_, res) =>{
    try{
       const Classes = await Users.classall()

       return res.status(200).json({count:Classes})
    }catch(error){
        return res.status(404).json({message:"Permission denied", error})
    }
}

const   Editclass = async ( req, res ) => {
    try{
     const { num, lett, descr} = req.body;
     
     const {id} = req.params
     if(!id){
        return res.status(403).json({message:"Not found"})
     }
   
     const scheme = Joi.object({
        num:Joi.number().min(1).max(11).required(),
            lett:Joi.string().max(1).required(),
            descr:Joi.string().required()
        
     });
   
     const { error } = scheme.validate({ num, lett, descr});
   
     if (error) return res.status(403).json({ message: error.message });
     
   
     const classs = await (
        num, lett, descr,id
     );
   
     return res.status(201).json({ message: "edit success", newclass: classs });
    }catch(error){
   return res.status(404 ).json({message:"Permission denied"})
//    console.log(error.message);
    }
   }

module.exports = {
    AddClass,
    ClassCount,
    Editclass
}