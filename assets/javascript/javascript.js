function criarElementos() {
  const main = document.getElementsByTagName("main")[0];
    const disco1 = document.createElement("div");
      disco1.style.width= "50px";
      disco1.style.height="30px";
      disco1.style.border="1px solid black";
      disco1.style.borderRadius= "10px"
      disco1.style.backgroundColor="red";
      disco1.setAttribute('class', 'dis1');
      const disco2 = document.createElement("div")
      disco2.style.width= "70px";
      disco2.style.height="30px";
      disco2.style.border="1px solid black";
      disco2.style.borderRadius= "10px"
      disco2.style.backgroundColor="green";
      disco2.setAttribute('class', 'dis2');
      const disco3 = document.createElement("div")
      disco3.style.width= "90px";
      disco3.style.height="30px";
      disco3.style.border="1px solid black";
      disco3.style.borderRadius= "10px"
      disco3.style.backgroundColor="blue";
      disco3.setAttribute('class', 'dis3');
      //CRIANDO BASE PARA TEST
      const base1 = document.createElement("div")
      base1.style.width= "91px";
      base1.style.height="1px";
      base1.style.border="1px solid black";
      base1.style.backgroundColor="black";
      base1.setAttribute('class', 'bas1');
      const base2 = document.createElement("div")
      base2.style.width= "91px";
      base2.style.height="1px";
      base2.style.border="1px solid black";
      base2.style.backgroundColor="black";
      base2.setAttribute('class', 'bas2');
      const base3 = document.createElement("div")
      base3.style.width= "91px";
      base3.style.height="1px";
      base3.style.border="1px solid black";
      base3.style.backgroundColor="black";
      base3.setAttribute('class', 'bas3');
      const torre1 = document.createElement("div");
      torre1.style.width= "15px";
      torre1.style.height="175px";
      torre1.style.border="1px solid black";
      torre1.style.backgroundColor="grey";
      torre1.setAttribute('class', 'tor1');
      torre1.appendChild(base1);
      torre1.appendChild(disco3);
      torre1.appendChild(disco2);
      torre1.appendChild(disco1);
      const torre2 = document.createElement("div");
      torre2.style.width= "15px";
      torre2.style.height="175px";
      torre2.style.border="1px solid black";
      torre2.style.backgroundColor="grey";
      torre2.setAttribute('class', 'tor2');
      torre2.appendChild(base2);
      const torre3 = document.createElement("div");
      torre3.style.width= "15px";
      torre3.style.height="175px";
      torre3.style.border="1px solid black";
      torre3.style.backgroundColor="orange";
      torre3.setAttribute('class', 'tor3');
      torre3.appendChild(base3);
      main.appendChild(torre1);
      main.appendChild(torre2);
      main.appendChild(torre3);
    }
criarElementos()

function closeModal() {
  document.getElementById('startModal').style.top = '-150%';
}

const button = document.querySelector('.play-button');
button.addEventListener('click', closeModal);


//CAPTURANDO EVENTOS NAS TORRES

const handleTorre1 = document.querySelector(".tor1");
handleTorre1.addEventListener("click", interceptandoEvento);

const handleTorre2 = document.querySelector(".tor2");
handleTorre2.addEventListener("click", interceptandoEvento);

const handleTorre3 = document.querySelector(".tor3");
handleTorre3.addEventListener("click", interceptandoEvento);




let playerMode = 0;
let selecao = 0;
let movimento = 0;

//FUNÇÃO DE ARMAZENAMENTO DE CLICKS 
function interceptandoEvento(event){

  if(playerMode === 0 ){
    selecao = event.currentTarget;
    console.log(selecao);
    playerMode = 1; 
  } else {
    movimento = event.currentTarget;
    console.log(movimento);
    playerMode = 0; 
    checkWidth(selecao, movimento);
  }
}

//FUNÇÃO PARA CHECAR O TAMANHO DO DISCO E MOVER O DISCO. 
function checkWidth(selecao,movimento){
  
  if(selecao.lastElementChild.clientWidth < movimento.lastElementChild.clientWidth){
    
    movimento.appendChild(selecao.lastElementChild);
    
  }  
  verifyWin();
}

// VERIFICADOR DE CONDIÇÃO DE VITORIA. (FALTA TESTAR)
function verifyWin(){
  
  const verify = document.querySelector(".tor3").childElementCount;
  console.log(verify);
  if(verify === 4){
    alert('Parabéns você ganhouu!!!!!'); 
  }
}








  




