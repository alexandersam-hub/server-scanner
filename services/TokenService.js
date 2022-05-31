// const jwt = require('jsonwebtoken')
// const TokenModel = require('../models/++TokenModel')
//
// class TokenModel{
//
//     generationToken(model){
//         return  jwt.sign(model, process.env.SECRET_KEY, {expiresIn: '3000d'})
//     }
//
//     validationToken(token){
//         return jwt.verify(token, process.env.SECRET_KEY)
//     }
//
//     async saveToken(userId, token){
//         try {
//             const currentToken = await TokenModel.findOne({user:userId})
//             if(currentToken){
//                 currentToken.token = token
//                 await currentToken.save()
//                 return true
//             }
//             await TokenModel.create({token, user:userId})
//             return true
//         }
//         catch (e) {
//             return false
//         }
//     }
//
//
// }
//
// module.exports = new TokenModel()