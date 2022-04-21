// **Consegna**
// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

const container = document.querySelector(".mb_container")

const btn = document.querySelector("button").addEventListener("click", function(){

  container.innerHTML = ""
  sqrStart()

})

function sqrStart(){
  const level = document.querySelector("#lvlChange").value;
  
  for(let i= 1; i<=level; i++){
    const sqr = sqrGen(container, parseInt(level))
    // devo creare una funzione che mi crei gli square

    sqr.innerHTML = `<span>${i}</span>`
    sqr.classList.add("mb_selected")
    sqr.addEventListener('click', function(){
      // this è una parola chiave che mi "dice" quale è l'elemento cickato
      this.classList.add('mb_clicked');
  })
  };

};

/**
 * creazione dello square
 * @param {divOfContainer} target 
 */
function sqrGen(target, lvl){
  const sqr = document.createElement("div");

  const level = document.querySelector("#lvlChange").value;
  
  if(lvl === 100){
    sqr.className += "mb_square_100";
  } else if (lvl === 81){
    sqr.className += "mb_square_81";
  } else if (lvl === 49){
    sqr.className += "mb_square_49";
  }

sqr.classList.add("square");
target.append(sqr);
return sqr;
}

