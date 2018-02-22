
function talk(){
  console.log(this.sound)
}

let animal ={
 talk 
}

let cat = {
  sound: 'meow'
}

let dog = {
  sound: 'woof'
}

let prarieDog = {
  howl: function(){
    console.log(this.sound.toUpperCase())
  }
}

Object.setPrototypeOf(cat, animal)
Object.setPrototypeOf(dog, animal)
cat.talk()
dog.talk()
Object.setPrototypeOf(prarieDog, dog)
prarieDog.howl()

/*
retorna:

meow
woof
WOOF

*/



// tomado del video:  Prototype basics - Object Creation in JavaScript P3
