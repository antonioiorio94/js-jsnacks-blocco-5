console.log('JS OK!');

// JSnack 2 ---------------
//Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)


//inserisci una stringa
let stringa = prompt("Inserisci la parola da invertire");

console.log(stringa);


//funzione per invertire la stringa
function reverseString (string){

  //dividere la stringa in array con il metodo split
  string = string.split("");

  //definire variabile per invertire l'ordine dell'array 
  let arrayStringaAlContrario = string.reverse();
  
  //definire una variabile per riunire gli elementi dell'array
  let stringaAlContrario = arrayStringaAlContrario.join("");
  

  return stringaAlContrario;

}

stringaInvertita = reverseString(stringa);

console.log(stringaInvertita);