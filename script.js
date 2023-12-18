// let form = document.querySelector('#myForm')
result.innerHTML = localStorage.getItem("stock");

const divPara = document.querySelector('.divDiv')
const myInput = document.getElementById("myInput");

const myButton = document.getElementById("myButton")

let myResult = document.getElementById("result")

myButton.addEventListener('click', function() {
  if (myInput.value === "Oui") {
    const myElement1 = document.createElement('p')
    const myElement2 = document.createElement('span')
    myElement1.innerHTML = myInput.value;
    myElement1.style.display = "none"
    myElement2.innerText = "Oh vraiment aujourd'hui je suis l'homme le plus heureux du monde j'espere que te sur de ta decision";
    myInput.style.display = "none"
    myButton.style.display = "none"
    divPara.style.display = "none"
    myElement2.style.fontSize = "20px"
    myElement2.style.color = "white"
    myResult.appendChild(myElement1);
    myResult.appendChild(myElement2)

    myInput.value = "";
    
  } else if (myInput.value === "Non")  {
    const myElement1 = document.createElement('p')
    const myElement2 = document.createElement('p')
    myElement1.innerHTML = myInput.value;
    myElement1.style.display = "none"
    myElement2.innerText = "Bah c'est pas grave j'ais pas de chance, alors je te souhaite tous le bonheur"
    myElement2.style.fontSize = "25px";
    myInput.style.display = "none";
    myButton.style.display = "none";    
    divPara.style.display = "none";
    // myElement2.style.color = "red";
    myResult.appendChild(myElement1);
    myResult.appendChild(myElement2);

    myInput.value = "";
  }else{
    alert("il faut ecrire Oui ou Non");
  }

  localStorage.setItem("stock", result.innerHTML)
})

console.log("hello");