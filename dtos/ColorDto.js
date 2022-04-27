
class ColorDto{

    id
    colorName
    colorNameRu
    color

    constructor(model){
        this.id = model.id? model.id.toString():''
        this.colorNameRu = model.colorNameRu;
        this.color = model.color;
    }
}

module.exports =  ColorDto