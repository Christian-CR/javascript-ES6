
// portiendo de esta lista de un archivo externo llamado data.txt  separado por tabs

mark johansson waffle iron  80  2
mark johansson blender 200 1
mark johansson knife 10  4
Nikita Smith waffle iron  80  1
Nikita Smith knife 10  2
Nikita Smith pot 20  3


import fs from 'fs'

var output = fs.readFileSync('data.txt', 'utf8')  // lee la info del archivo data.txt / utf lo convierte en texto legible

// divide el texto para deplegarlo en un array
.split('\n')
console.log('output' output)

// retorna esto:
/*
output [
  'mark johansson\twaffle iron\t80\t2',
  'mark johansson\tblender\t200\t1',
  'mark johansson\tknife\t10\t4',
  'Nikita Smith\twaffle iron\t80\t1',
  'Nikita Smith\tknife\t10\t2',
  'Nikita Smith\tpot\t20\t3',
  ''
]
*/


// para borrar el timo espacio que quedó al final
  .trim()
  .split('\n')
console.log('output' output)

// retorna esto:
/*
output [
  'mark johansson\twaffle iron\t80\t2',
  'mark johansson\tblender\t200\t1',
  'mark johansson\tknife\t10\t4',
  'Nikita Smith\twaffle iron\t80\t1',
  'Nikita Smith\tknife\t10\t2',
  'Nikita Smith\tpot\t20\t3'
]
*/
