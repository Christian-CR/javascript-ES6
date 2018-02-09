
// ejemplo usando la funcion map

var animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro',       species: 'dog' },
  { name: 'Hamilton',   species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jummy', species: 'fish' }
]

var names = animals.map(function(){
  return animal.name;
});

// retorna esto
// [ 'Fluffykins', 'Caro', 'Hamilton', 'Harold', 'Ursula', 'Jummy' ]
