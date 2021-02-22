require('./mongodb_connection');

const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');

const port = process.env.PORT || 8000 ;

const {Student,College} = require('./schema');
const register_data = require("./register_data");
const search_queries = require("./search_queries");

app.use(cors());
app.use(express.json());


app.use("/register_data",register_data);
app.use("/query",search_queries);

app.get('/', (req, res)=> {
  res.send('hello world')
})

app.listen(port,()=>console.log("listening to port"));