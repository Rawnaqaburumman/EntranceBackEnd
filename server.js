const express = require('express') // require the express package
const server = express();
const cors = require('cors');

server.use(cors());
require('dotenv').config();
const axios = require('axios'); 
server.use(express.json());

const port = process.env.PORT
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL);
//===============================================================================

const { getIndex} = require('./controller/index.controller')


server.get('/', getIndex)

//================================================================================


const {getLan,addFav,getFav,deleteLan,updatedLan} =require('./controller/lan.controller')

server.get('/lan', getLan)
server.post('/fav', addFav)
server.get('/fav',getFav)
server.delete('/fav/:_id',deleteLan)
server.put('/fav/:_id',updatedLan)
server.listen(port) 