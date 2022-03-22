console.log('JS OK!');

// JSnack 1 ---------------
//Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.


//creazione oggetto con zucchine
const zucchine = [

  {
    varietà: "Zucchina nera",
    peso: 0.7,
    lunghezza: 20,

  },
  {
    varietà: "Zucchino romanesco",
    peso: 0.5,
    lunghezza: 30,

  },
  {
    varietà: "Zucchino fiorentino",
    peso: 1.3,
    lunghezza: 25,

  },
  {
    varietà: "Zucchina napoletana",
    peso: 1.5,
    lunghezza: 33,

  },
  {
    varietà: "Zucchine tonde",
    peso: 0.5,
    lunghezza: 24,

  },
  {
    varietà: "Zucchina pâtisson",
    peso: 0.4,
    lunghezza: 23,

  },
  {
    varietà: "Zucchina Crookneck",
    peso: 1,
    lunghezza: 28,

  },
  {
    varietà: "Zucchino rugoso friulano",
    peso: 0.4,
    lunghezza: 19,

  },
  {
    varietà: "Zucchine trombetta",
    peso: 1.2,
    lunghezza: 31,

  },
  {
    varietà: "Zucchino giallo",
    peso: 0.6,
    lunghezza: 22,

  },


]

//prova conosole.table
let { peso , lunghezza} = zucchine;
console.table(zucchine)


totPesoZucchine ();



//creazione funzione
function totPesoZucchine (){

    let somma = 0;
    for(i=0; i<zucchine.length; i++){
      let pesoZucchina = zucchine[i].peso ;
      somma += Math.round (pesoZucchina) ;
  }

  console.log(`Il peso complessivo è ${somma} Kg`)
}