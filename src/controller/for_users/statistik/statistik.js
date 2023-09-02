const Statistik = require("../../../model/for_users/statistik")


const Statistika = async (req, res) => {    
    try{
        const pupil = await Statistik.pupils()
        const user = await Statistik.users()

        return res.status(200).json({pupil:pupil, user:user})
    
    }catch(err){
    return res.status(404).json({message:"Permission denied",err})
    }
    
}


module.exports = {
    Statistika
}