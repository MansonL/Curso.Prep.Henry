// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var arreglo = new Array();
  var i=0;
  for (const key in objeto) {
    i++;
    var arreglo$i = [`${key}`, parseInt(`${objeto[key]}`)];
    arreglo.push(arreglo$i);
  }
  return arreglo
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var key = [], value = [];
  const objeto = {};
  var i = 0, j=0;
  for (let i= 0; i < string.length; i++) {
   if(key.indexOf(string[i])===-1){
     key[j]=string[i];
     value[j]=0;
     j++;
   }
   if(key.indexOf(string[i])!==-1){
     value[key.indexOf(string[i])]+=1;
   }
 }
  for (let i= 0; i < key.length; i++) {
    objeto[key[i]]=value[i];
  }
return objeto
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var stringToArray = Array.from(s);
 var upperCases = [], lowerCases=[];
 stringToArray.forEach(element => {
   if(element===element.toUpperCase()){
      upperCases.push(element);
   }
   else{
      lowerCases.push(element);
   }
 });
  return upperCases.concat(lowerCases).join('')
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var array=[];
  var words = str.split(' ');
  var flipCharacters = null;
  for (let i= 0; i < words.length; i++) {
    flipCharacters=Array.from(words[i]);
    array.push(flipCharacters.reverse().join(''));
  }
  return array.join(' ')
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numeroToArray = Array.from(numero.toString());
  if((numeroToArray.reverse()).join('')===numero.toString()){
     return "Es capicua"
  }
  else{
    
    return "No es capicua"
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  cadenaToArray = Array.from(cadena);
  cadenaModified = [];
  if(cadenaToArray.indexOf('a')!==-1 || cadenaToArray.indexOf('b')!==-1 || cadenaToArray.indexOf('c')!==-1){
    function validos(character){
        return (character!=='a' & character!=='b' & character!=='c')
    }
    cadenaModified = cadenaToArray.filter(validos) 
    return cadenaModified.join('')
  }
  else {
    return cadena
  }
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(order);
  function order (a,b){
   if(a.length<b.length){
     return -1
   }
   if(a.length>b.length){
     return 1
   }
   else{
     return 0
   }
  }
  return arr
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var interseccion = [];
  arreglo1.forEach(element => {
    if(arreglo2.includes(element)){
      interseccion.push(element);
    }
  });
  return interseccion
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

