const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.get('/',(req,res)=>{
    res.send('Hello World');
});
app.use("/api/blogs",require('./routes/blog.router'));
app.use("/api/users",require('./routes/user.router'));

app.use(express.json());app.use(express.urlencoded({ extended: true }));
mongoose.connect("mongod://127.0.0.1:27017/test ")
.then(() => {
    console.log("Connected to MongoDB");
})

app.listen(5565,()=>{
    console.log('Server is running on port 5565');
});