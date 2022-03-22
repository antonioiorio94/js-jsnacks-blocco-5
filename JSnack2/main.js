console.log('JS OK!');

// JSnack 2 ---------------
//Crea 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.

//creazione oggetto con zucchine
const zucchine = [

  {
    varietà: "Zucchina nera",
    peso: 0.7,
    lunghezza: 33

  },
  {
    varietà: "Zucchino romanesco",
    peso: 0.5,
    lunghezza: 16

  },
  {
    varietà: "Zucchino fiorentino",
    peso: 1.3,
    lunghezza: 13

  },
  {
    varietà: "Zucchina napoletana",
    peso: 1.5,
    lunghezza: 33

  },
  {
    varietà: "Zucchine tonde",
    peso: 0.5,
    lunghezza: 24

  },
  {
    varietà: "Zucchina pâtisson",
    peso: 0.4,
    lunghezza: 12

  },
  {
    varietà: "Zucchina Crookneck",
    peso: 1,
    lunghezza: 11

  },
  {
    varietà: "Zucchino rugoso friulano",
    peso: 0.4,
    lunghezza: 9

  },
  {
    varietà: "Zucchine trombetta",
    peso: 1.2,
    lunghezza: 14

  },
  {
    varietà: "Zucchino giallo",
    peso: 0.6,
    lunghezza: 8

  },


]


//Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.

const zucchineCorte = [];
const zucchineLunghe = [];

for(let i=0; i<zucchine.length; i++){

  const lunghezzaZucchina = zucchine[i].lunghezza;

  misuraZucchine(lunghezzaZucchina);
  

}

//funzione per dividere le zucchine in base alla lunghezza
function misuraZucchine (lunghezzaZucchina){
  if(lunghezzaZucchina <= 15){

    zucchineCorte.push(lunghezzaZucchina);
  }else{

    zucchineLunghe.push(lunghezzaZucchina);
  }

}

console.log(zucchineCorte);
console.log(zucchineLunghe);