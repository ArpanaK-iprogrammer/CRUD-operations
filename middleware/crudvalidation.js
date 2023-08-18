const userSchema = require('../model/schema');

const crudvalidation = (req,res,next) => {
    const data = {
        storeName:req.body.storeName,
        location:req.body.location
    }

    const result = userSchema.validate(data);
    console.log(result);

    if(result.error){
        return(res.json({ status: result.error.details[0].message }))
    }

    next();

}

module.exports = crudvalidation;