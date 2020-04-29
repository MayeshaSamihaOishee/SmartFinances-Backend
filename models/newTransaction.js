const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var NewTransaction = new Schema(
    {
        amount : {
            type : Number,
            required : true,
            trim : true,
            
        },
         date : {
             type : Number,
             required : true,
             trim : true,
         },
         fundtype : {
             type : String,
             required : true,
             trim : true,
         },
         description : {
             type : String,
             required : true,
             trim : true,
             maxlength : 200,
         },
         fundoptions : {
             type : String,
             required : true,
             trim : true,
         },
         portfolio : {
             type : Number,
             default : 1000,
         },
    },
);


module.exports = mongoose.model("NewTransaction", NewTransaction);