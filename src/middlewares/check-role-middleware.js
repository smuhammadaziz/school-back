const CheckRole = (role) => {
  return (req, res, next) => {
    const { user } = req;

    if (role === "superadmin") {
      if (user.role === "superadmin") return next();
      else return res.status(403).json({ message: "Permission deniedd"});
    } else if (role === "direktor") {
      if (user.role === "direktor") return next();
      else return res.status(403).json({ message: "Permission denied"});
    }else if (role === "teacher"){
     if (user.role === role) return next();
     else return res.status(403).json({ message: "Permission denied"});
    }else{
     return res.status(403).json({ message: "Permission denied"});
    }
  };
};
module.exports = {CheckRole};