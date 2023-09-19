
import lista from "./lista.js";

let listaPizza =  document.querySelector('#listaPizza')
let tradicional = document.querySelector('#tradicional')
let especial = document.querySelector('#especial')
let ingredientes = document.querySelector('#ingrediente')
let promocional = document.querySelector('#promocional')
// botoes
let button_tradicional = document.querySelector('#btrad')
let button_espcial = document.querySelector("#besp");
let button_promocional = document.querySelector("#bpro");
let button_ingredientes = document.querySelector("#bingre");



let button = document.querySelector('#button')
button.addEventListener('click', function(){

    var nome = document.querySelector("#nome");
    var nomeNovo = nome.value;
    var email = document.querySelector("#email");
    var emailNovo = email.value;
    var telefone = document.querySelector("#telefone");
    var telefoneNovo = telefone.value;
    var endereco = document.querySelector("#endereco");
    var enderecoNovo = endereco.value;
    var observacao = document.querySelector("#observacao");
    var observacaoNovo = observacao.value;
    var pedidoFeito = document.querySelector("#pedidoFeito");
    if (
      nomeNovo === "" ||
      emailNovo === "" ||
      telefoneNovo === "" ||
      enderecoNovo === "" ||
      observacaoNovo === ""
    ) {
      pedidoFeito.innerHTML = "coloque os dados corretamente";
    } else {
      pedidoFeito.innerHTML = `
   <div><p>Nome: ${nomeNovo}</p></div>
   <div><p>Email: ${emailNovo}</p></div>
   <div><p>Telefone: ${telefoneNovo}</p></div>
   <div><p>Endereço: ${enderecoNovo}</p></div>
   <div><p>observação: ${observacaoNovo}</p></div>
    `;
    }
    console.log(pedidoFeito); 
});



tradicional.innerHTML += `<button id="ing"> <div><p>Tipo:${lista.pizzaPortuguesa.nome}</p></div>
  <div><img src="${lista.pizzaPortuguesa.img}" class="imagem" alt=""></div>
  <div><p>Descrição:${lista.pizzaPortuguesa.descricao}</p></div>
  <div><p>Preço:${lista.pizzaPortuguesa.preco}</p></div> </button>
  <br>
  <div><p>Tipo:${lista.pizzaQqueijos.nome}</p></div>
  <div><img src="${lista.pizzaQqueijos.img}" class="imagem" alt=""></div>
  <div><p>Descrição:${lista.pizzaQqueijos.descricao}</p></div>
  <div><p>Preço:${lista.pizzaQqueijos.preco}</p></div>
  <br>
  <div><p>Tipo:${lista.pizzmarguerita.nome}</p></div>
  <div><img src="${lista.pizzmarguerita.img}" class="imagem" alt=""></div>
  <div><p>Descrição:${lista.pizzmarguerita.descricao}</p></div>
  <div><p>Preço:${lista.pizzmarguerita.preco}</p></div>
  <br> `;
especial.innerHTML += ` <div><p>Tipo:${lista.pizzaPortuguesa.nome}</p></div>
  <div><img src="${lista.pizzaPortuguesa.img}" class="imagem" alt=""></div>
  <div><p>Descrição:${lista.pizzaPortuguesa.descricao}</p></div>
  <div><p>Preço:${lista.pizzaPortuguesa.preco}</p></div>
  <br>
  <div><p>Tipo:${lista.pizzaQqueijos.nome}</p></div>
  <div><img src="${lista.pizzaQqueijos.img}" class="imagem" alt=""></div>
  <div><p>Descrição:${lista.pizzaQqueijos.descricao}</p></div>
  <div><p>Preço:${lista.pizzaQqueijos.preco}</p></div>
  <br>
  <div><p>Tipo:${lista.pizzmarguerita.nome}</p></div>
  <div><img src="${lista.pizzmarguerita.img}" class="imagem" alt=""></div>
  <div><p>Descrição:${lista.pizzmarguerita.descricao}</p></div>
  <div><p>Preço:${lista.pizzmarguerita.preco}</p></div>
  <br>`;
 promocional.innerHTML += ` <div><p>Tipo:${lista.pizzaPortuguesa.nome}</p></div>
  <div><img src="${lista.pizzaPortuguesa.img}" class="imagem" alt=""></div>
  <div><p>Descrição:${lista.pizzaPortuguesa.descricao}</p></div>
  <div><p>Preço:${lista.pizzaPortuguesa.preco}</p></div>
  <br>
  <div><p>Tipo:${lista.pizzaQqueijos.nome}</p></div>
  <div><img src="${lista.pizzaQqueijos.img}" class="imagem" alt=""></div>
  <div><p>Descrição:${lista.pizzaQqueijos.descricao}</p></div>
  <div><p>Preço:${lista.pizzaQqueijos.preco}</p></div>
  <br>
  <div><p>Tipo:${lista.pizzmarguerita.nome}</p></div>
  <div><img src="${lista.pizzmarguerita.img}" class="imagem" alt=""></div>
  <div><p>Descrição:${lista.pizzmarguerita.descricao}</p></div>
  <div><p>Preço:${lista.pizzmarguerita.preco}</p></div>
  <br>
  <div><p>Tipo:${lista.pizzaPortuguesa.nome}</p></div>
  <div><img src="${lista.pizzaPortuguesa.img}" class="imagem" alt=""></div>
  <div><p>Descrição:${lista.pizzaPortuguesa.descricao}</p></div>
  <div><p>Preço:${lista.pizzaPortuguesa.preco}</p></div>
  <br>`;
ingredientes.innerHTML += `<div><p>Tipo:${lista.pizzaQqueijos.nome}</p></div>
  <div><img src="${lista.pizzaQqueijos.img}" class="imagem" alt=""></div>
  <div><p>Descrição:${lista.pizzaQqueijos.descricao}</p></div>
  <div><p>Preço:${lista.pizzaQqueijos.preco}</p></div>
  <br>
  <div><p>Tipo:${lista.pizzmarguerita.nome}</p></div>
  <div><img src="${lista.pizzmarguerita.img}" class="imagem" alt=""></div>
  <div><p>Descrição:${lista.pizzmarguerita.descricao}</p></div>
  <div><p>Preço:${lista.pizzmarguerita.preco}</p></div>
  <br>
  <div><p>Tipo:${lista.pizzaPortuguesa.nome}</p></div>
  <div><img src="${lista.pizzaPortuguesa.img}" class="imagem" alt=""></div>
  <div><p>Descrição:${lista.pizzaPortuguesa.descricao}</p></div>
  <div><p>Preço:${lista.pizzaPortuguesa.preco}</p></div>
  <br>
  <div><p>Tipo:${lista.pizzaQqueijos.nome}</p></div>
  <div><img src="${lista.pizzaQqueijos.img}" class="imagem" alt=""></div>
  <div><p>Descrição:${lista.pizzaQqueijos.descricao}</p></div>
  <div><p>Preço:${lista.pizzaQqueijos.preco}</p></div>
  <br>
  <div><p>Tipo:${lista.pizzmarguerita.nome}</p></div>
  <div><img src="${lista.pizzmarguerita.img}" class="imagem" alt=""></div>
  <div><p>Descrição:${lista.pizzmarguerita.descricao}</p></div>
  <div><p>Preço:${lista.pizzmarguerita.preco}</p></div>`;

  var butting = document.querySelector('#ing')
  butting.addEventListener('click', function(){
    window.alert('oi')
  })

  tradicional.style.display = 'none'
  especial.style.display = 'none'
  promocional.style.display = 'none'
  ingredientes.style.display = 'none'

button_tradicional.addEventListener("click", function () {
  if(tradicional.style.display == 'none'){
    tradicional.style.display = 'block'
  }else{
    tradicional.style.display = 'none'
  }
});
button_espcial.addEventListener("click", function () {
   if (especial.style.display == "none") {
     especial.style.display = "block";
   } else {
     especial.style.display = "none";
   }
});
button_promocional.addEventListener("click", function () {
 if (promocional.style.display == "none") {
   promocional.style.display = "block";
 } else {
   promocional.style.display = "none";
 }
  
});
button_ingredientes.addEventListener("click", function () {
   if (ingredientes.style.display == "none") {
     ingredientes.style.display = "block";
   } else {
     ingredientes.style.display = "none";
   }
});