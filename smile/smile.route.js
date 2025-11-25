const router = require('express').Router();
router.get("/getusers",(req,res)=>{
    res.json({
        success:true,
        data:[{name:"Pranav"}]
    });
});module.exports = router;