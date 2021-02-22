const mongoose = require('mongoose');
const uri = "mongodb+srv://sarvesh:sarvesh@cluster0.rx2wr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
};

mongoose.connect(uri, connectionParams).then(()=>
console.log("connection with mongodb atlas successful")
).catch((err)=>console.log(err));
