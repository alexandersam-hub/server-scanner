const {Schema, model} = require('mongoose')

const ColorModel = new Schema({
    colorNameRu:{type:String, required:true},
    color:{type:String, required:true},
})

module.exports = model('Color', ColorModel)