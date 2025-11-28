const router = require('express').Router();
router.get("/getusers",(req,res)=>{
    res.send({
        success:true,
        data:[{name:"Pranav"}]
    });
});module.exports = router;