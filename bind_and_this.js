
let dog = {
  sound: 'woof'.
  talk: function(){
    console.log(this.sound)
  }
}

dog.talk() // retorna  'woof'
let talkFunction = dog.talk
talkFunction() // retorna  undefined

// otra forma


dog.talk() // retorna  'woof'
let talkFunction = dog.talk
let boundFunction = talkFunction.bind(dog)  // el método bind enlaza la otra funcion
boundFunction() // retorna  'woof'


// let button = document.getElementsById('myNiceButton')

button.addEventListener(
  'click',
  dog.talk.bind(dog)
)


// OTRO EJEMPLO:

function talk(){
  console.log(this.sound)
}

let boromir = {
    sound: 'One does not simply walk into mordor!'
  }

let talkBoundToBoromir = talk.bind(boromir)
talkBoundToBoromir();


// OTRO EJEMPLO ( otra forma de hacer los mismo ):

let talk = function(){
    console.log(this.sound)
  }

let boromir = {
  speak: talk, 
  sound: 'One does not simply walk into mordor!'

}

boromir.speak();



// OTRO EJEMPLO ( otra forma de hacer los mismo ):

let talk = function(){
    console.log(this.sound)
  }

let boromir = {
  sound: 'One does not simply walk into mordor!'

}

boromir.speak = talk.bind(boromir)
let blabber = boromir.speak
blabber()

