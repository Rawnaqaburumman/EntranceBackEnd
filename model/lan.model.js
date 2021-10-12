"use syrict"
const mongoose = require("mongoose");
class Lan {


    constructor(title, imageUrl) {

        this.title = title;
        this.imageUrl = imageUrl

    }
}

//============================================================

const Schema = mongoose.Schema;

const lanSchema = new Schema({

    title: {
        type: String,

    },
    imageUrl: {
        type: String,

    },


});


const LanModel = mongoose.model("LanModel", lanSchema);









module.exports = { Lan, LanModel }