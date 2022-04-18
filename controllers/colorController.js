const colorService = require('../services/colorService')

class ColorController{

    async addColor(req,res){
        try{
            const {color} = req.body
            if(color)
                return res.json(await colorService.addColors(color))
            return res.json({warning:true, message:'Не все поля заполнены верно'})
        }catch (e) {
            return res.json({warning:true, message:'Ошибка сервера'})
        }
    }
    async updateColor(req,res){
        try{
            const {color} = req.body
            if(color && color.id)
                return res.json(await colorService.updateColors(color))
            return res.json({warning:true, message:'Не все поля заполнены верно'})
        }catch (e) {
            return res.json({warning:true, message:'Ошибка сервера'})
        }
    }
    async delColor(req,res){
        try{
            const {id} = req.body
            if(id)
                return res.json(await colorService.delColors(id))
            return res.json({warning:true, message:'Нет поля id'})
        }catch (e) {
            return res.json({warning:true, message:'Ошибка сервера'})
        }
    }
    async getColor(req,res){
        try{
            return res.json(await colorService.getColors())
        }catch (e) {
            return res.json({warning:true, message:'Ошибка сервера'})
        }
    }
}

module.exports = new ColorController()