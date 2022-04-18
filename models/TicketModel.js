const {Schema, model} = require('mongoose')

const CompletedModel = new Schema({
    title:{type:String, required:true},
    countPeople:{type:Number,required:true},
    countTeams:{type:Number, required:true},
    teamsName:{type:[String]},
    teamsColor:{type:[String]},
    description:{type:String},
    isColor:{type:Boolean, default:false},
    isTeamName:{type:Boolean, default:false},
    isTeamNumber:{type:Boolean, default:false}
})

module.exports = model('Ticket', CompletedModel)