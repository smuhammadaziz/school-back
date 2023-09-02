const {fetch} = require("../../utils/pg");


const allbestpupils = "SELECT count(*) FROM pupils WHERE congrolutation = true";
const allusers  = "SELECT count(*) FROM users"


const pupils  = () => fetch(allbestpupils)
const users = () => fetch(allusers)


module.exports = {pupils,users}