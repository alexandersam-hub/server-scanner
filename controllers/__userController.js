// const userService = require('../services/authService')
//
// class UserController{
//
//     errorResponse = {warning:true, message:'Ошибка сервера'}
//     notData = {warning:true, message:'Заполнены не все данные'}
//     async login(req,res){
//         try{
//             const {username, password} = req.body
//             if(!username || !password){
//                 return res.json(this.notData)
//             }
//             return res.json(await userService.login(username, password))
//         }catch (e) {
//             return res.json(this.errorResponse)
//         }
//     }
//
//     async registration(req,res){
//         try{
//             const {user} = req.body
//             if(!user)
//                 return res.json(this.notData)
//
//             return res.json(await userService.registration(user))
//
//         }catch (e) {
//             return res.json(this.errorResponse)
//         }
//     }
//
//     async getUsers(req,res){
//         try{
//           return res.json(await userService.getUsers())
//         }catch (e) {
//             return res.json(this.errorResponse)
//         }
//     }
//
//     async removeUser(req,res){
//         try{
//             const {id} = req.body
//             if(id)
//                 return res.json(await userService.removeUser())
//             else{
//                 return res.json(this.notData)
//             }
//         }catch (e) {
//             return res.json(this.errorResponse)
//         }
//     }
//
//     async updateUser(req,res){
//         try{
//             const {user} = req.body
//             if(user.id)
//                 return res.json(await userService.removeUser())
//             else{
//                 return res.json(this.notData)
//             }
//         }catch (e) {
//             return res.json(this.errorResponse)
//         }
//     }
//
//
//
// }
//
// module.exports = new UserController()