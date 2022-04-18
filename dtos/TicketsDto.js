
class TicketsDto{
    id
    title
    countPeople
    countTeams
    teamsName
    teamsColor
    description
    isColor
    isTeamName
    isTeamNumber

    constructor(model) {
        this.id = model.id?model.id.toString():''
        this.title = model.title;
        this.countPeople = model.countPeople;
        this.countTeams = model.countTeams;
        this.teamsName = model.teamsName;
        this.teamsColor = model.teamsColor;
        this.description = model.description;
        this.isColor = model.isColor;
        this.isTeamName = model.isTeamName;
        this.isTeamNumber = model.isTeamNumber
    }

}
module.exports =  TicketsDto