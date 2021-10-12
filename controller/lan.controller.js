
const axios = require('axios');
const { Lan, LanModel } = require('../model/lan.model')


//1- get API data ===================================



const getLan = async (req, res) => {

    const url = "https://ltuc-asac-api.herokuapp.com/programmingLangData"
    await axios.get(url).then(result => {

        const lanWanted = result.data.map(item => {

            return new Lan(item.title, item.imageUrl)

        })

        res.json(lanWanted)

    })

}

//2- addFav ============================================
const addFav = (req, res) => {
    const { title, imageUrl } = req.body
    console.log(req.body)
    const myLan = new LanModel({ title, imageUrl });
    myLan.save();
    res.json(myLan);

}

//3-getFav================================================

const getFav = async(req, res )=> {

    LanModel.find((error, favData) =>


        res.json(favData)



    )



}

//4- deletelan==================================================



const deleteLan =(req,res)=>{

newLan=req.params._id
    LanModel.deleteOne({ _id:newLan}  , (error,deletedLan)=>{

res.json(deletedLan)


    } );


}


// 5- Update ==============================================================

const updatedLan =(req,res) =>{
    newLan=req.params._id;
    const { title, imageUrl } = req.body

    LanModel.findByIdAndUpdate({ _id:newLan},  { title, imageUrl }, {new:true} ,(error,updatedLan)=> {

res.json(updatedLan)



    })

    
}

module.exports = { getLan, addFav, getFav,deleteLan,updatedLan }