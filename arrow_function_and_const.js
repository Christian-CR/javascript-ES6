
const dragonEvents = [
  { type: 'attack', value: 12, target: 'player-dorkman' },
  { type: 'yawn', value: 40 },
  { type: 'eat', target: 'horse' },
  { type: 'attack', value: 23, target: 'player-fluffykins' },
  { type: 'attack', value: 12, target: 'player-dorkman' }
]

const totalDamageOnDorkman = dragonEvents
.filter(function(event){
  return event.type === 'attack' 
})

// retorna todos los type que tengan el string attack

console.log( 'totalDamageOnDorkman', totalDamageOnDorkman );

// tomado del video: arroe function in javascript - what, why and how
