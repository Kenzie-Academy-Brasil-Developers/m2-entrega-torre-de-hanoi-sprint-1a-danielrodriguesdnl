function criaDiscos() {
  
  const body = document.getElementsByTagName("body")[0];
 
    
    const disco1 = document.createElement("div"); 
      
      disco1.style.width= "100px";
      disco1.style.height="30px";
      disco1.style.border="1px solid black";
      disco1.style.borderRadius= "10px"
      disco1.style.backgroundColor="red";
      disco1.setAttribute('class', 'dis1');
     
      const disco2 = document.createElement("div")  
 
      disco2.style.width= "150px";
      disco2.style.height="30px";
      disco2.style.border="1px solid black";
      disco2.style.borderRadius= "10px"
      disco2.style.backgroundColor="green";
      disco2.setAttribute('class', 'dis2');
      
      const disco3 = document.createElement("div")  
      
      disco3.style.width= "200px";
      disco3.style.height="30px";
      disco3.style.border="1px solid black";
      disco3.style.borderRadius= "10px"
      disco3.style.backgroundColor="blue";
      disco3.setAttribute('class', 'dis3');
      
      body.appendChild(disco1)
      body.appendChild(disco2)
      body.appendChild(disco3)
   } 

criaDiscos()

function criaTorres() {
  
  const body = document.getElementsByTagName("body")[0];
  for (let i = 0; i < 3; i++){
      const torre = document.createElement("div");
      torre.style.width= "15px";
      torre.style.height="175px";
      torre.style.border="1px solid black";
      torre.style.backgroundColor="grey";
      if(i === 2){
        torre.style.backgroundColor="orange";
      }
      body.appendChild(torre);
  }
}
criaTorres()




