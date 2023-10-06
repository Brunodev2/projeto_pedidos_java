
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



tradicional.innerHTML += `<button class="pizz" id="pi_Portuguesa"> <div><p>${lista.pizzaPortuguesa.nome}</p></div>
  <div><img src="${lista.pizzaPortuguesa.img}" class="imagem" alt=""></div>
  <div><p>Ingredientes: ${lista.pizzaPortuguesa.descricao}</p></div>
  <div><p>Preço: $ ${lista.pizzaPortuguesa.preco} reais</p></div> </button>
  <br>
  <button class="pizz" id="pi_Queijos"> <div><p>Tipo:${lista.pizzaQqueijos.nome}</p></div>
  <div><img src="${lista.pizzaQqueijos.img}" class="imagem" alt=""></div>
  <div><p>Descrição:${lista.pizzaQqueijos.descricao}</p></div>
  <div><p>Preço:${lista.pizzaQqueijos.preco}</p></div> </button>
  <br>
   <button class="pizz" id="pi_marguerita"> <div><p>Tipo:${lista.pizzmarguerita.nome}</p></div>
  <div><img src="${lista.pizzmarguerita.img}" class="imagem" alt=""></div>
  <div><p>Descrição:${lista.pizzmarguerita.descricao}</p></div>
  <div><p>Preço:${lista.pizzmarguerita.preco}</p></div> </button>
  <br>
   <button class="pizz" id="pi_calabresa"> <div><p>Tipo:${lista.pizzCalabresa.nome}</p></div>
  <div><img src="${lista.pizzCalabresa.img}" class="imagem" alt=""></div>
  <div><p>Descrição:${lista.pizzCalabresa.descricao}</p></div>
  <div><p>Preço:${lista.pizzCalabresa.preco}</p></div> </button>
  <br> `;
  
especial.innerHTML += ` <button class= "pizz" id="#"> <div><p>${lista.pizzaLombinho.nome}</p></div>
  <div><img src="${lista.pizzaLombinho.img}" class="imagem" alt=""></div>
  <div><p>Descrição:${lista.pizzaLombinho.descricao}</p></div>
  <div><p>Preço:${lista.pizzaLombinho.preco}</p></div> </button>
  <br>
  <button class= "pizz" id="#"> <div><p>${lista.pizzaParaense.nome}</p></div>
  <div><img src="${lista.pizzaParaense.img}" class="imagem" alt=""></div>
  <div><p>Descrição:${lista.pizzaParaense.descricao}</p></div>
  <div><p>Preço:${lista.pizzaParaense.preco}</p></div> </button>
  <br>
  <button class= "pizz" id=#> <div><p>${lista.pizzaPalmito.nome}</p></div>
  <div><img src="${lista.pizzaPalmito.img}" class="imagem" alt=""></div>
  <div><p>Descrição:${lista.pizzaPalmito.descricao}</p></div>
  <div><p>Preço:${lista.pizzaPalmito.preco}</p></div> </button>
  <br>
  <button class= "pizz" id=#"> <div><p>${lista.pizzaPicanha.nome}</p></div>
  <div><img src="${lista.pizzaPicanha.img}" class="imagem" alt=""></div>
  <div><p>Descrição:${lista.pizzaPicanha.descricao}</p></div>
  <div><p>Preço:${lista.pizzaPicanha.preco}</p></div> </button>
  <br>
 `;
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



let pizzaPedida = document.querySelector("#pizzaPedida")
let pizzaPedida2 = document.querySelector("#pizzaPedida2");
let pizzapedida3 = document.querySelector('#pizzaPedida3')
let pizzapedida4 = document.querySelector('#pizzaPedida4')
let pi_Portuguesa = document.querySelector('#pi_Portuguesa')
let pi_Queijos = document.querySelector("#pi_Queijos");
let pi_marguerita = document.querySelector('#pi_marguerita')
let pi_calabresa = document.querySelector('#pi_calabresa')
let resultado = document.querySelector("#resultado")
let valor = document.querySelector('#valor')
var Quantidade1 = 0
var Quantidade2 = 0
var Quantidade3 = 0
resultado.style.display = 'none'





pi_Portuguesa.addEventListener('click', function (){

 
  pizzaPedida.innerHTML = `<br><div><p>${lista.pizzaPortuguesa.nome}</p></div>
  <div><img src="${lista.pizzaPortuguesa.img}" class="imagem" alt=""></div>
  <div><p>Descrição:${lista.pizzaPortuguesa.descricao}</p></div>
  <div><p>Preço: R$ ${lista.pizzaPortuguesa.preco},00 Reais</p></div> <div><p>Quantidade:${++Quantidade1}<p></div> `;
  
  const formate = new Intl.NumberFormat("pt-BR",{style:"currency", currency:'BRL', minimumFractionDigits:2,})
  
  
 
    resultado.value -= lista.pizzaPortuguesa.preco*-1
   
    valor.innerHTML = formate.format(resultado.value)
  
    
})

pi_Queijos.addEventListener("click", function () {
 
  
  pizzaPedida2.innerHTML = `<br><div><p>${lista.pizzaQqueijos.nome}</p></div>
  <div><img src="${lista.pizzaQqueijos.img}" class="imagem" alt=""></div>
  <div><p>Descrição:${lista.pizzaQqueijos.descricao}</p></div>
  <div><p>Preço:${lista.pizzaQqueijos.preco}</p></div><div><p>Quantidade:${++Quantidade2}<p></div> </span> `;
 


   const formate = new Intl.NumberFormat("pt-BR",{style:"currency", currency:'BRL', minimumFractionDigits:2,})
     
   resultado.value -= lista.pizzaQqueijos.preco * -1;
   
   valor.innerHTML = formate.format(resultado.value);
   
});

pi_marguerita.addEventListener("click", function(){

pizzapedida3.innerHTML = `<br><div><p>${lista.pizzmarguerita.nome}</p></div>
  <div><img src="${lista.pizzmarguerita.img}" class="imagem" alt=""></div>
  <div><p>Descrição:${lista.pizzmarguerita.descricao}</p></div>
  <div><p>Preço:${lista.pizzmarguerita.preco}</p></div><div><p>Quantidade:${++Quantidade3}<p></div> </span>`

   const formate = new Intl.NumberFormat("pt-BR",{style:"currency", currency:'BRL', minimumFractionDigits:2,})
     
   resultado.value -= lista.pizzmarguerita.preco * -1;
   
   valor.innerHTML = formate.format(resultado.value);


})

pi_calabresa.addEventListener("click", function(){

pizzapedida4.innerHTML = `<br><div><p>${lista.pizzCalabresa.nome}</p></div>
  <div><img src="${lista.pizzCalabresa.img}" class="imagem" alt=""></div>
  <div><p>Descrição:${lista.pizzCalabresa.descricao}</p></div>
  <div><p>Preço:${lista.pizzCalabresa.preco}</p></div><div><p>Quantidade:${++Quantidade3}<p></div> </span>`

   const formate = new Intl.NumberFormat("pt-BR",{style:"currency", currency:'BRL', minimumFractionDigits:2,})
     
   resultado.value -= lista.pizzCalabresa.preco * -1;
   
   valor.innerHTML = formate.format(resultado.value);


})