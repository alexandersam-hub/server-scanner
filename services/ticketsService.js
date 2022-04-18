const TicketModel = require('../models/TicketModel')
const TicketsDto = require('../dtos/TicketsDto')

class TicketsService{

    async getTickets() {
        try{
            const tickets = await TicketModel.find()
            const ticketsDto = []
            tickets.forEach(t => ticketsDto.push({...new TicketsDto(t)}))

            return {warning: false, tickets:ticketsDto}

        } catch (e) {
            return {warning: false, message:'Ошибка чтения из базы данных '+e }
        }

    }

    async addTickets(ticket){
        console.log(ticket)
        try{
            await TicketModel.create({...ticket})
            return {warning: false, message:'Тикет добавлен'}

        } catch (e) {
            return {warning: true, message:'Ошибка чтения из базы данных'}
        }
    }

    async updateTickets(ticket){
        try{
            const id = ticket.id
            delete (ticket.id)
            await TicketModel.findByIdAndUpdate(id, {...ticket})

            return {warning: false, message:'Тикет обновлен'}
        }
        catch (e) {
            return {warning: true, message:'Ошибка при удалении'}
        }
    }

    async delTicket(id){
        try{
            const tickets = await TicketModel.findByIdAndDelete(id)

            return {warning: false, message:'Тикет удален'}

        } catch (e) {
            return {warning: true, message:'Ошибка при удалении'}
        }
    }

}

module.exports = new TicketsService()