function criarElementos() {
  
  const main = document.getElementsByTagName("main")[0];
 
    
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


      const torre1 = document.createElement("div");
      torre1.style.width= "15px";
      torre1.style.height="175px";
      torre1.style.border="1px solid black";
      torre1.style.backgroundColor="grey";
      torre1.setAttribute('class', 'tor1');
      torre1.appendChild(disco1);
      torre1.appendChild(disco2);
      torre1.appendChild(disco3);
      
      const torre2 = document.createElement("div");
      torre2.style.width= "15px";
      torre2.style.height="175px";
      torre2.style.border="1px solid black";
      torre2.style.backgroundColor="grey";
      torre2.setAttribute('class', 'tor2');

      const torre3 = document.createElement("div");
      torre3.style.width= "15px";
      torre3.style.height="175px";
      torre3.style.border="1px solid black";
      torre3.style.backgroundColor="orange";
      torre3.setAttribute('class', 'tor3');
      

      main.appendChild(torre1);
      main.appendChild(torre2);
      main.appendChild(torre3);

    }

criarElementos()




