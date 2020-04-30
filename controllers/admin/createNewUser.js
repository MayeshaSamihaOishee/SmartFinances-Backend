const NewUser = require("../../models/createNewUser");


exports.CreateUser = (req, res) =>{
  const newUser = new NewUser(req.body)
  newUser.save((err,newUser)=> {
    if(err){
      return res.status(400).json({
        error:"Not able to Create User"
      })
    }
    res.json({newUser})
  })
}