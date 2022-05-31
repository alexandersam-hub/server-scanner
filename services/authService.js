// const UserModel = require('../models/UserModel')
// const tokenService = require('./TokenService')
// const UserDto = require('../dtos/UserDto')
// const bcrypt = require('bcryptjs')
//
// class AuthService{
//
//     errorBdMessage={warning:true, message:'Ошибка БД'}
//
//     async registration(model){
//         try {
//
//             const user = await UserModel.findOne({username: model.username})
//
//             if (user)
//                 return {warning: true, message: 'Пользователь уже существует'}
//
//             model.password = bcrypt.hashSync( model.password, 7)
//
//             const newUser = await UserModel.create({...model})
//             if (newUser)
//                 return {warning:false, user: { ... new UserDto(newUser)}}
//             else
//                 return this.errorBdMessage
//         }
//         catch (e) {
//             return this.errorBdMessage
//         }
//     }
//
//     async login(username, password){
//         try{
//             const user = await UserModel.findOne({username: username})
//             if(!user)
//                 return {warning: true, message: "Пользователь не найден"}
//             if (!user.isActive)
//                 return {warning: true, message: "Пользователь заблокирован"}
//             const isPassEquals = bcrypt.compareSync(password, user.password)
//             if (isPassEquals) {
//                 const userDto = new UserDto(user)
//                 const newToken = tokenService.generationToken({...userDto})
//                 await tokenService.saveToken(userDto.id, newToken)
//                 return {
//                     warning: false,
//                     token: newToken
//                 }
//         }
//             return {warning: true, message: "Неверный пароль"}
//         }
//         catch (e) {
//             return this.errorBdMessage
//         }
//     }
//
//     async getUsers(){
//         try{
//             const usersBd = await UserModel.find()
//             const users = []
//             usersBd.forEach(item=>users.push({... new UserDto(item)}))
//             return {warning:false, users}
//         }
//         catch (e) {
//             return this.errorBdMessage
//         }
//     }
//
//     async updateUser(user){
//         try{
//
//             if(user.id){
//                 const id  = user.id
//                 delete (user.id)
//                 const newUser = await UserModel.findByIdAndUpdate(id, {...user})
//                 if(newUser)
//                     return {warning:false, user:newUser}
//             }
//             return {warning:true, message:'Нет id или пользователя с данным id'}
//         }catch (e) {
//             return this.errorBdMessage
//         }
//     }
//
//     async removeUser(id){
//         try{
//            await UserModel.findByIdAndDelete(id)
//             return {warning:false}
//         }catch (e) {
//             return this.errorBdMessage
//         }
//     }
// }
//
// module.exports = new AuthService()