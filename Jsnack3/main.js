console.log('JS OK!');

// JSnack 2 ---------------
//Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

let stringa = prompt("Inserisci la parola da invertire");

console.log(stringa);



function reverseString (string){


  stringa = stringa.split("");

  console.log(stringa)
  
  let arrayStringaAlContrario = stringa.reverse();
  
  console.log(arrayStringaAlContrario);
  
  let stringaAlContrario = arrayStringaAlContrario.join("");
  
  console.log(stringaAlContrario);

  return stringaAlContrario;

}

reverseString(stringa)