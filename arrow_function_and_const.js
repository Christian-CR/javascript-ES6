
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
.filter(function(event){
  return event.target === 'player-dorkman'
})
// retorna todos los target que tienen el valor player-dorkman
.map(function(event){
  return.event.value
})
// retorna solo los valores del target player-dorkman que serian 12 y 12
.reduce(function(prev, value){
  return (prev || 0) + value
})
// retorna la suma de los valores anteriores, osea 12 y 12 = 24

console.log( 'totalDamageOnDorkman', totalDamageOnDorkman );

// tomado del video: arroe function in javascript - what, why and how
