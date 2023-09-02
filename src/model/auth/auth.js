const {fetch,fetchOne} = require("../../utils/pg")

const findbyemail = "select * from users where email = $1"

const findone = (email) => fetchOne(findbyemail, email)

module.exports = {findone} 