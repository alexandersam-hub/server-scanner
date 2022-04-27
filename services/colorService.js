const ColorModel = require('../models/ColorModel')
const colorDto = require('../dtos/ColorDto')

class ColorService{

    async getColors() {
        try{
            const colors = await ColorModel.find()
            const colorsDto = []
            colors.forEach(t => colorsDto.push({...new colorDto(t)}))

            return {warning: false, colors:colorsDto}

        } catch (e) {
            return {warning: false, message:'Ошибка чтения из базы данных '+e }
        }

    }

    async addColors(color){
        try{
            const newColor = await ColorModel.create({...color})
            return {warning: false, message:'Цвет добавлен', color:new colorDto(newColor) }

        } catch (e) {
            return {warning: true, message:'Ошибка чтения из базы данных'}
        }
    }

    async updateColors(color){
        try{
            const id = color.id
            delete (color.id)
            await ColorModel.findByIdAndUpdate(id,{...color})

            return {warning: false, message:'Тикет обновлен'}
        }
        catch (e) {
            return {warning: true, message:'Ошибка при удалении'}
        }
    }

    async delColors(id){
        try{
            await ColorModel.findByIdAndDelete(id)
            return {warning: false, message:'Цвет удален'}

        } catch (e) {
            return {warning: true, message:'Ошибка при удалении'}
        }
    }

}

module.exports = new ColorService()