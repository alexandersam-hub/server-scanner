const ticketsService = require('../services/ticketsService')

class TicketsController{
    async addTicket(req,res){
        try{
            const {ticket} = req.body
            if(ticket)
                return res.json(await ticketsService.addTickets(ticket))
            return res.json({warning:true, message:'Не все поля заполнены верно'})
        }catch (e) {
            return res.json({warning:true, message:'Ошибка сервера'})
        }
    }
    async updateTicket(req,res){
        try{
            const {ticket} = req.body
            if(ticket && ticket.id)
                return res.json(await ticketsService.updateTickets(ticket))
            return res.json({warning:true, message:'Не все поля заполнены верно'})
        }catch (e) {
            return res.json({warning:true, message:'Ошибка сервера'})
        }
    }
    async delTicket(req,res){
        try{
            const {id} = req.body
            if(id)
                return res.json(await ticketsService.delTicket(id))
            return res.json({warning:true, message:'Нет поля id'})
        }catch (e) {
            return res.json({warning:true, message:'Ошибка сервера'})
        }
    }
    async getTicket(req,res){
        try{
            return res.json(await ticketsService.getTickets())
        }catch (e) {
            return res.json({warning:true, message:'Ошибка сервера'})
        }
    }
}

module.exports = new TicketsController()