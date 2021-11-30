function criaDiscos() {
  
  const body = document.getElementsByTagName("body")[0];
  for (let i = 0; i < 3; i++){
      const disco = document.createElement("div");
      disco.style.width=`${100 + 50 * (i)}px`;
      disco.style.height="30px";
      disco.style.border="1px solid black";
      disco.style.borderRadius= "10px"
      disco.style.backgroundColor="red";
      if(i === 1){
        disco.style.backgroundColor="green";
      }
      if(i === 2){
        disco.style.backgroundColor="blue";
      }
      body.appendChild(disco);
  }
}
criaDiscos()

function criaTorres() {
  
  const body = document.getElementsByTagName("body")[0];
  for (let i = 0; i < 3; i++){
      const torre = document.createElement("div");
      torre.style.width= "15px";
      torre.style.height="200px";
      torre.style.border="1px solid black";
      torre.style.backgroundColor="grey";
      if(i === 2){
        torre.style.backgroundColor="orange";
      }
      body.appendChild(torre);
  }
}
criaTorres()




