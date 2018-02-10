

var animals = [
  {name:'Fluffkins', species:'rabbit'},
  {name: 'Caro', species: 'dog'},
  {name: 'Hamilton', species: 'dog'},
  {name: 'Harold', species: 'fish'},
  {name: 'Ursula', species: 'cat'},
  {name: 'jimmy', species: 'fish'}
]

//******* modo normal:

var dogs = []
for (var i=0; i<animals.lenght; i++){
  if (animals[i] === 'dog'){
        dogs.push(animals[i])
      }
}


// ******** usando filter

var dogs = animals.filter(function(){
  return ainimal.species === 'dog'
})
