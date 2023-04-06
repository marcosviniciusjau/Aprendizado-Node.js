const { inherits }= require('util')
const{ EventEmmitter }= require('events')

function Character(name){
    this.name= name
}

inherits(Character,EventEmmitter)

const chapolin= new Character('Chapolin')
chapolin.on('help',() => console.log(`Eu o ${chapolin.name} colorado!`))

console.log('Oh e agora quem podera me defender')
chapolin.emit('help')