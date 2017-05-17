window.onload = fuction(){
var yousay = "goodbye";

if (yousay.startsWith("goodbye")){
var isay = "hello";
}

console.log('you say ${yousay}, I say ${isay}');

/* NEW STRINGS METHODS

- replace
- startsWith
- endsWith
- includes

*/
  
  // Otras formas de expresar un arreglo
  
  var lenguajes = new Array("ruby", "javascript", "go", "php");
  var lenguajes2 = ["ruby", "javascript", "go", "php"];
  
  
  // Map o Mapa
  
  var car = new Map();
  
  car.set("brand", "Volkswagen");
  car.set("name", "yeta");
  car.set("color", "black");
  
  console.log(car.get("brand")); // retorna Volkswagen
  console.log(car.has("brand")); // pregunta si existe brand
  car.delete("brand"); // borra el valor
  
  // Set o Conjunto
  
  var dogs = new Set();
  
  dogs.add("Chihuahua"); // agrega
  dogs.add("Golden Retriever"); // agrega
  dogs.add("Pastor Alemán"); // agrega
  
  dogs.delete("Chihuahua"); // borra el valor
  console.log(dogs); // retorna los valores
  dogs.size // retorma la cantidad de valores en forma de numero
  
  // Ciclo for of
  
  var frameworks = new Array("Rails", "Node.js", "Laravel");
  
  for(let framework of frameworks){
    console.log(framework); //  retorma los valosres
  }
  
  // Ciclo while
  
 var age = 1 
  
  
  
  
  

 
