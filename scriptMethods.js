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
 
