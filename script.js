
import lista from "./lista.js";
import skils from "./skils.js";

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

    let nome = document.querySelector("#nome");
    let nomeNovo = nome.value;
    let email = document.querySelector("#email");
    let emailNovo = email.value;
    let telefone = document.querySelector("#telefone");
    let telefoneNovo = telefone.value;
    let endereco = document.querySelector("#endereco");
    let enderecoNovo = endereco.value;
    let observacao = document.querySelector("#observacao");
    let observacaoNovo = observacao.value;
    let pedidoFeito = document.querySelector("#pedidoFeito");
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



tradicional.innerHTML += `<button class="pizz" id="pi_Portuguesa"> ${skils.listaNNova2(lista.pizzaPortuguesa.nome,lista.pizzaPortuguesa.img,lista.pizzaPortuguesa.descricao,lista.pizzaPortuguesa.preco)} </button>
  <br>
  <button class="pizz" id="pi_Queijos"> ${skils.listaNNova2(lista.pizzaQqueijos.nome,lista.pizzaQqueijos.img,lista.pizzaQqueijos.descricao,lista.pizzaQqueijos.preco)} </button>
  <br>
   <button class="pizz" id="pi_marguerita"> ${skils.listaNNova2(lista.pizzmarguerita.nome,lista.pizzmarguerita.img,lista.pizzmarguerita.descricao,lista.pizzmarguerita.preco)}</button>
  <br>
   <button class="pizz" id="pi_calabresa"> ${skils.listaNNova2(lista.pizzCalabresa.nome,lista.pizzCalabresa.img,lista.pizzCalabresa.descricao,lista.pizzCalabresa.preco)} </button>
  <br> `;
  
especial.innerHTML += ` <button class= "pizz" id="#">${skils.listaNNova2(lista.pizzaLombinho.nome,lista.pizzaLombinho.img,lista.pizzaLombinho.descricao,lista.pizzaLombinho.preco)} </button>
  <br>
  <button class= "pizz" id="#"> ${skils.listaNNova2(lista.pizzaParaense.nome,lista.pizzaParaense.img,lista.pizzaParaense.descricao,lista.pizzaParaense.preco)} </button>
  <br>
  <button class= "pizz" id=#> ${skils.listaNNova2(lista.pizzaPalmito.nome,lista.pizzaPalmito.img,lista.pizzaPalmito.descricao,lista.pizzaPalmito.preco)} </button>
  <br>
  <button class= "pizz" id=#"> ${skils.listaNNova2(lista.pizzaPicanha.nome,lista.pizzaPicanha.img,lista.pizzaPicanha.descricao,lista.pizzaPicanha.preco)}</pizzaPicanha
 `;
 promocional.innerHTML += ` <button class= "pizz" id="#">${skils.listaNNova2(lista.pizzaLombinho.nome,lista.pizzaLombinho.img,lista.pizzaLombinho.descricao,lista.pizzaLombinho.preco)} </button>
 <br>
 <button class= "pizz" id="#"> ${skils.listaNNova2(lista.pizzaParaense.nome,lista.pizzaParaense.img,lista.pizzaParaense.descricao,lista.pizzaParaense.preco)} </button>
 <br>
 <button class= "pizz" id=#> ${skils.listaNNova2(lista.pizzaPalmito.nome,lista.pizzaPalmito.img,lista.pizzaPalmito.descricao,lista.pizzaPalmito.preco)} </button>
 <br>
 <button class= "pizz" id=#"> ${skils.listaNNova2(lista.pizzaPicanha.nome,lista.pizzaPicanha.img,lista.pizzaPicanha.descricao,lista.pizzaPicanha.preco)}</pizzaPicanha
`;
ingredientes.innerHTML += ` <button class= "pizz" id="#">${skils.listaNNova2(lista.pizzaLombinho.nome,lista.pizzaLombinho.img,lista.pizzaLombinho.descricao,lista.pizzaLombinho.preco)} </button>
<br>
<button class= "pizz" id="#"> ${skils.listaNNova2(lista.pizzaParaense.nome,lista.pizzaParaense.img,lista.pizzaParaense.descricao,lista.pizzaParaense.preco)} </button>
<br>
<button class= "pizz" id=#> ${skils.listaNNova2(lista.pizzaPalmito.nome,lista.pizzaPalmito.img,lista.pizzaPalmito.descricao,lista.pizzaPalmito.preco)} </button>
<br>
<button class= "pizz" id=#"> ${skils.listaNNova2(lista.pizzaPicanha.nome,lista.pizzaPicanha.img,lista.pizzaPicanha.descricao,lista.pizzaPicanha.preco)}</pizzaPicanha
<br>
<button class= "pizz" id=#> ${skils.listaNNova2(lista.pizzaPalmito.nome,lista.pizzaPalmito.img,lista.pizzaPalmito.descricao,lista.pizzaPalmito.preco)} </button>
<br>
<button class= "pizz" id=#"> ${skils.listaNNova2(lista.pizzaPicanha.nome,lista.pizzaPicanha.img,lista.pizzaPicanha.descricao,lista.pizzaPicanha.preco)}</pizzaPicanha
`;

  

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

let Quantidade1 = 0
let Quantidade2 = 0
let Quantidade3 = 0
let Quantidade4 = 0
resultado.style.display = 'none'





pi_Portuguesa.addEventListener('click', function (){
   
  pizzaPedida.innerHTML = `<span id='menos' class="material-symbols-outlined">disabled_by_default</span> ${skils.listaNNova(lista.pizzaPortuguesa.nome,lista.pizzaPortuguesa.img,lista.pizzaPortuguesa.descricao,lista.pizzaPortuguesa.preco)} `;

let quantidadeFinal = document.querySelector("#quantidadeFinal");

  quantidadeFinal.innerHTML = ++Quantidade1

    resultado.value -= lista.pizzaPortuguesa.preco*-1
   
    valor.innerHTML = skils.moeda(resultado.value)


    let botaomenos = document.querySelector('#menos')

       botaomenos.addEventListener("click", function(){

        resultado.value -= lista.pizzaPortuguesa.preco
        
        valor.innerHTML = skils.moeda(resultado.value)

         quantidadeFinal.innerHTML = --Quantidade1;

      

        console.log(Quantidade1)
        if(Quantidade1==0){
          pizzaPedida.innerHTML = ''
        }
        

      
})
})



pi_Queijos.addEventListener("click", function () {

  pizzaPedida2.innerHTML = skils.listaNNova(lista.pizzaQqueijos.nome,lista.pizzaQqueijos.img,lista.pizzaQqueijos.descricao,lista.pizzaQqueijos.preco,++Quantidade2);
 
   resultado.value -= lista.pizzaQqueijos.preco * -1;
   
   valor.innerHTML = skils.moeda(resultado.value)

});


pi_marguerita.addEventListener("click", function(){

pizzapedida3.innerHTML = skils.listaNNova(lista.pizzmarguerita.nome,lista.pizzmarguerita.img,lista.pizzmarguerita.descricao,lista.pizzmarguerita.preco,++Quantidade3)

   resultado.value -= lista.pizzmarguerita.preco * -1;
   
   valor.innerHTML = skils.moeda(resultado.value);


})

pi_calabresa.addEventListener("click", function(){

pizzapedida4.innerHTML = skils.listaNNova(lista.pizzCalabresa.nome,lista.pizzCalabresa.img,lista.pizzCalabresa.descricao,lista.pizzCalabresa.preco,++Quantidade4);
     
   resultado.value -= lista.pizzCalabresa.preco * -1;
   
   valor.innerHTML = skils.moeda(resultado.value);


})


