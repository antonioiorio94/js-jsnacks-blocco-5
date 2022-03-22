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

  const zucchina = zucchine[i];

  misuraZucchine(zucchina);

  
}

//funzione per dividere le zucchine in base alla lunghezza
function misuraZucchine (zucchina){
  if(zucchina.lunghezza <= 15){

    zucchineCorte.push(zucchina);
  }else{

    zucchineLunghe.push(zucchina);
  }

}

console.table(zucchineCorte);
console.table(zucchineLunghe);

//Infine stampa separatamente quanto pesano i due gruppi di zucchine.
let sommaZucchineCorte = 0;

for (let y=0; y<zucchineCorte.length;y++){
  
  const pesoZucchineCorte = zucchineCorte[y].peso;
  sommaZucchineCorte += Math.round(pesoZucchineCorte);

  
}

console.log(sommaZucchineCorte);