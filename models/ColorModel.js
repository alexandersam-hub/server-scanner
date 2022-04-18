const {Schema, model} = require('mongoose')

const ColorModel = new Schema({
    colorName:{type:String, required:true},
    colorNameRu:{type:String, required:true},
    color:{type:String, required:true},
})

module.exports = model('Color', ColorModel)