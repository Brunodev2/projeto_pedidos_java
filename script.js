
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


//pizzas tradicionais
tradicional.innerHTML += `<button class="pizz" id="pi_Portuguesa"> ${skils.listaNNovab(lista.pizzaPortuguesa.nome,lista.pizzaPortuguesa.img,lista.pizzaPortuguesa.descricao,lista.pizzaPortuguesa.preco)} </button>
  <br>
  <button class="pizz" id="pi_Queijos"> ${skils.listaNNovab(lista.pizzaQqueijos.nome,lista.pizzaQqueijos.img,lista.pizzaQqueijos.descricao,lista.pizzaQqueijos.preco)} </button>
  <br>
   <button class="pizz" id="pi_marguerita"> ${skils.listaNNovab(lista.pizzmarguerita.nome,lista.pizzmarguerita.img,lista.pizzmarguerita.descricao,lista.pizzmarguerita.preco)}</button>
  <br>
   <button class="pizz" id="pi_calabresa"> ${skils.listaNNovab(lista.pizzCalabresa.nome,lista.pizzCalabresa.img,lista.pizzCalabresa.descricao,lista.pizzCalabresa.preco)} </button>
  <br> `;
  //pizzas especiais
especial.innerHTML += ` <button class= "pizz" id="pi_lombinho">${skils.listaNNovab(lista.pizzaLombinho.nome,lista.pizzaLombinho.img,lista.pizzaLombinho.descricao,lista.pizzaLombinho.preco)} </button>
  <br>
  <button class= "pizz" id="pi_paraense"> ${skils.listaNNovab(lista.pizzaParaense.nome,lista.pizzaParaense.img,lista.pizzaParaense.descricao,lista.pizzaParaense.preco)} </button>
  <br>
  <button class= "pizz" id="pi_palmito"> ${skils.listaNNovab(lista.pizzaPalmito.nome,lista.pizzaPalmito.img,lista.pizzaPalmito.descricao,lista.pizzaPalmito.preco)} </button>
  <br>
  <button class= "pizz" id="pi_picanha"> ${skils.listaNNovab(lista.pizzaPicanha.nome,lista.pizzaPicanha.img,lista.pizzaPicanha.descricao,lista.pizzaPicanha.preco)}</button>
 `;
 //pizzas promocionais
 promocional.innerHTML += ` <button class= "pizz" id="pi_mista">${skils.listaNNovab(lista.pizzaMista.nome,lista.pizzaMista.img,lista.pizzaMista.descricao,lista.pizzaMista.preco)} </button>
 <br>
 <button class= "pizz" id="pi_presunto"> ${skils.listaNNovab(lista.pizzaPresunto.nome,lista.pizzaPresunto.img,lista.pizzaPresunto.descricao,lista.pizzaPresunto.preco)} </button>
 <br>
 <button class= "pizz" id=pi_frangokatu> ${skils.listaNNovab(lista.pizzaFrangokatupiri.nome,lista.pizzaFrangokatupiri.img,lista.pizzaFrangokatupiri.descricao,lista.pizzaFrangokatupiri.preco)} </button>
 <br>
 <button class= "pizz" id=pi_mussarela> ${skils.listaNNovab(lista.pizzaMussarela.nome,lista.pizzaMussarela.img,lista.pizzaMussarela.descricao,lista.pizzaMussarela.preco)} </button> `;
//ingredientes extras
ingredientes.innerHTML += ` <button class= "pizz" id="#">${skils.listaNNovab(lista.pizzaLombinho.nome,lista.pizzaLombinho.img,lista.pizzaLombinho.descricao,lista.pizzaLombinho.preco)} </button>
<br>
<button class= "pizz" id="#"> ${skils.listaNNovab(lista.pizzaParaense.nome,lista.pizzaParaense.img,lista.pizzaParaense.descricao,lista.pizzaParaense.preco)} </button>
<br>
<button class= "pizz" id=#> ${skils.listaNNovab(lista.pizzaPalmito.nome,lista.pizzaPalmito.img,lista.pizzaPalmito.descricao,lista.pizzaPalmito.preco)} </button>
<br>
<button class= "pizz" id=#"> ${skils.listaNNovab(lista.pizzaPicanha.nome,lista.pizzaPicanha.img,lista.pizzaPicanha.descricao,lista.pizzaPicanha.preco)}</pizzaPicanha
<br>
<button class= "pizz" id=#> ${skils.listaNNovab(lista.pizzaPalmito.nome,lista.pizzaPalmito.img,lista.pizzaPalmito.descricao,lista.pizzaPalmito.preco)} </button>
<br>
<button class= "pizz" id=#"> ${skils.listaNNovab(lista.pizzaPicanha.nome,lista.pizzaPicanha.img,lista.pizzaPicanha.descricao,lista.pizzaPicanha.preco)}</pizzaPicanha
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
let pizzapedida5 = document.querySelector("#pizzaPedida5");
let pizzapedida6 = document.querySelector("#pizzaPedida6");
let pizzapedida7 = document.querySelector("#pizzaPedida7");
let pizzapedida8 = document.querySelector("#pizzaPedida8");
let pizzapedida9 = document.querySelector("#pizzaPedida9");
let pizzapedida10 = document.querySelector("#pizzaPedida10");
let pizzapedida11 = document.querySelector("#pizzaPedida11");
let pizzapedida12 = document.querySelector("#pizzaPedida12");


//tradicionais
let pi_Portuguesa = document.querySelector('#pi_Portuguesa')
let pi_Queijos = document.querySelector("#pi_Queijos");
let pi_marguerita = document.querySelector('#pi_marguerita')
let pi_calabresa = document.querySelector('#pi_calabresa')
//especiais
let pi_lombinho = document.querySelector("#pi_lombinho");
let pi_paraense = document.querySelector("#pi_paraense")
let pi_palmito = document.querySelector("#pi_palmito")
let pi_picanha = document.querySelector("#pi_picanha")
//promocioanis
let pi_frangokatu = document.querySelector('#pi_frangokatu')
let pi_mista = document.querySelector('#pi_mista')
let pi_mussarela = document.querySelector("#pi_mussarela");
let pi_presunto = document.querySelector('#pi_presunto')
//ingredientes extras

let resultado = document.querySelector("#resultado")
let valor = document.querySelector('#valor')

let Quantidade1 = 0
let Quantidade2 = 0
let Quantidade3 = 0
let Quantidade4 = 0
let Quantidade5 = 0;
let Quantidade6 = 0;
let Quantidade7 = 0;
let Quantidade8 = 0;
let Quantidade9 = 0;
let Quantidade10 = 0;
let Quantidade11 = 0;
let Quantidade12 = 0;

resultado.style.display = 'none'



//lista de pizzas tradicionais

pi_Portuguesa.addEventListener('click', function (){
   
  pizzaPedida.innerHTML = `<span id='menos' class="material-symbols-outlined">disabled_by_default</span> ${skils.listaNNova(lista.pizzaPortuguesa.nome,lista.pizzaPortuguesa.img,lista.pizzaPortuguesa.descricao,lista.pizzaPortuguesa.preco)} <span class="botaox" id="quantidadeFinal"> </span>`;

let quantidadeFinal = document.querySelector("#quantidadeFinal");

  quantidadeFinal.innerHTML = ++Quantidade1

    resultado.value -= lista.pizzaPortuguesa.preco*-1
   
    valor.innerHTML = skils.moeda(resultado.value) // a função moeda modifica o valor para moeda corrente


    let botaomenos = document.querySelector('#menos')

       botaomenos.addEventListener("click", function(){
         resultado.value -= lista.pizzaPortuguesa.preco;

         valor.innerHTML = skils.moeda(resultado.value); // a função moeda modifica o valor para moeda corrente

         quantidadeFinal.innerHTML = --Quantidade1;

         
         if (Quantidade1 == 0) {
           pizzaPedida.innerHTML = "";
         }
       })
})

pi_Queijos.addEventListener("click", function () {

  pizzaPedida2.innerHTML =`<span id='menos1' class="material-symbols-outlined">disabled_by_default</span> ${skils.listaNNova(lista.pizzaQqueijos.nome,lista.pizzaQqueijos.img,lista.pizzaQqueijos.descricao,lista.pizzaQqueijos.preco)}<span class="botaox" id="quantidadeFinal2"> </span>`;

  let quantidadeFinal2 = document.querySelector("#quantidadeFinal2");

  quantidadeFinal2.innerHTML = ++Quantidade2;
 
   resultado.value -= lista.pizzaQqueijos.preco * -1;
   
   valor.innerHTML = skils.moeda(resultado.value)

   let botaomenos = document.querySelector('#menos1')

       botaomenos.addEventListener("click", function(){

         resultado.value -= lista.pizzaQqueijos.preco;

         valor.innerHTML = skils.moeda(resultado.value); // a função moeda modifica o valor para moeda corrente

         quantidadeFinal2.innerHTML = --Quantidade2;

         
         if (Quantidade2 == 0) {
           pizzaPedida2.innerHTML = "";
         }
       })

});

pi_marguerita.addEventListener("click", function(){

pizzapedida3.innerHTML = `<span id='menos3' class="material-symbols-outlined">disabled_by_default</span> ${skils.listaNNova(lista.pizzmarguerita.nome,lista.pizzmarguerita.img,lista.pizzmarguerita.descricao,lista.pizzmarguerita.preco)}<span class="botaox" id="quantidadeFinal3"> </span> `
  
   let quantidadeFinal3 = document.querySelector("#quantidadeFinal3");

   quantidadeFinal3.innerHTML = ++Quantidade3;


   resultado.value -= lista.pizzmarguerita.preco * -1;
   
   valor.innerHTML = skils.moeda(resultado.value);

  let botaomenos = document.querySelector('#menos3')

       botaomenos.addEventListener("click", function(){

         resultado.value -= lista.pizzmarguerita.preco;

         valor.innerHTML = skils.moeda(resultado.value); // a função moeda modifica o valor para moeda corrente

         quantidadeFinal3.innerHTML = --Quantidade3;

         
         if (Quantidade3 == 0) {
           pizzapedida3.innerHTML = "";
         }
       })

})

pi_calabresa.addEventListener("click", function(){

pizzapedida4.innerHTML = `<span id='menos4' class="material-symbols-outlined">disabled_by_default</span>  ${skils.listaNNova(lista.pizzCalabresa.nome,lista.pizzCalabresa.img,lista.pizzCalabresa.descricao,lista.pizzCalabresa.preco,)} <span class="botaox" id="quantidadeFinal4"> </span>`;

let quantidadeFinal4 = document.querySelector("#quantidadeFinal4");
   quantidadeFinal4.innerHTML = ++Quantidade4;


   resultado.value -= lista.pizzCalabresa.preco * -1;
   
   valor.innerHTML = skils.moeda(resultado.value);

    let botaomenos = document.querySelector('#menos4')

       botaomenos.addEventListener("click", function(){

         resultado.value -= lista.pizzCalabresa.preco;

         valor.innerHTML = skils.moeda(resultado.value); // a função moeda modifica o valor para moeda corrente

         quantidadeFinal4.innerHTML = --Quantidade4;

         
         if (Quantidade4 == 0) {
           pizzapedida4.innerHTML = "";
         }
       })


})

// lista de pizzas especiais

pi_lombinho.addEventListener('click',()=>{

pizzapedida5.innerHTML=` <span id='menos5' class="material-symbols-outlined">disabled_by_default</span> ${skils.listaNNova(lista.pizzaLombinho.nome,lista.pizzaLombinho.img,lista.pizzaLombinho.descricao,lista.pizzaLombinho.preco)} <span class="botaox" id="quantidadeFinal5"> </span>`;

let quantidadeFinal5 = document.querySelector("#quantidadeFinal5");
   quantidadeFinal5.innerHTML = ++Quantidade5;


   resultado.value -= lista.pizzaLombinho.preco * -1;
   
   valor.innerHTML = skils.moeda(resultado.value);

    let botaomenos = document.querySelector('#menos5')

       botaomenos.addEventListener("click", function(){

         resultado.value -= lista.pizzaLombinho.preco;

         valor.innerHTML = skils.moeda(resultado.value); // a função moeda modifica o valor para moeda corrente

         quantidadeFinal5.innerHTML = --Quantidade5;

         
         if (Quantidade5 == 0) {
           pizzapedida5.innerHTML = "";
         }
       })

})

pi_paraense.addEventListener('click',()=>{

 pizzapedida6.innerHTML=` <span id='menos6' class="material-symbols-outlined">disabled_by_default</span> ${skils.listaNNova(lista.pizzaParaense.nome,lista.pizzaParaense.img,lista.pizzaParaense.descricao,lista.pizzaParaense.preco)} <span class="botaox" id="quantidadeFinal6"> </span>`

 let quantidadeFinal6 = document.querySelector("#quantidadeFinal6");
   quantidadeFinal6.innerHTML = ++Quantidade6;


   resultado.value -= lista.pizzaParaense.preco * -1;
   
   valor.innerHTML = skils.moeda(resultado.value);

    let botaomenos = document.querySelector('#menos6')

       botaomenos.addEventListener("click", function(){

         resultado.value -= lista.pizzaParaense.preco;

         valor.innerHTML = skils.moeda(resultado.value); // a função moeda modifica o valor para moeda corrente

         quantidadeFinal6.innerHTML = --Quantidade6;

         
         if (Quantidade6 == 0) {
           pizzapedida6.innerHTML = "";
         }
       })

})

pi_palmito.addEventListener('click',()=>{

pizzapedida7.innerHTML=` <span id='menos7' class="material-symbols-outlined">disabled_by_default</span> ${skils.listaNNova(lista.pizzaPalmito.nome,lista.pizzaPalmito.img,lista.pizzaPalmito.descricao,lista.pizzaPalmito.preco)} <span class="botaox" id="quantidadeFinal7"> </span>`

let quantidadeFinal7 = document.querySelector("#quantidadeFinal7");
   quantidadeFinal7.innerHTML = ++Quantidade7;


   resultado.value -= lista.pizzaPalmito.preco * -1;
   
   valor.innerHTML = skils.moeda(resultado.value);

    let botaomenos = document.querySelector('#menos7')

       botaomenos.addEventListener("click", function(){

         resultado.value -= lista.pizzaPalmito.preco;

         valor.innerHTML = skils.moeda(resultado.value); // a função moeda modifica o valor para moeda corrente

         quantidadeFinal7.innerHTML = --Quantidade7;

         
         if (Quantidade7 == 0) {
           pizzapedida7.innerHTML = "";
         }
       })

})

pi_picanha.addEventListener('click',()=>{

 pizzapedida8.innerHTML=` <span id='menos8' class="material-symbols-outlined">disabled_by_default</span> ${skils.listaNNova(lista.pizzaPicanha.nome,lista.pizzaPicanha.img,lista.pizzaPicanha.descricao,lista.pizzaPicanha.preco)} <span class="botaox" id="quantidadeFinal8"> </span>`

 let quantidadeFinal8 = document.querySelector("#quantidadeFinal8");
   quantidadeFinal8.innerHTML = ++Quantidade8;


   resultado.value -= lista.pizzaPicanha.preco * -1;
   
   valor.innerHTML = skils.moeda(resultado.value);

    let botaomenos = document.querySelector('#menos8')

       botaomenos.addEventListener("click", function(){

         resultado.value -= lista.pizzaPicanha.preco;

         valor.innerHTML = skils.moeda(resultado.value); // a função moeda modifica o valor para moeda corrente

         quantidadeFinal8.innerHTML = --Quantidade8;

         
         if (Quantidade8 == 0) {
           pizzapedida8.innerHTML = "";
         }
       })

})

// lista de pizzas promocionais


pi_mista.addEventListener('click',()=>{

pizzapedida9.innerHTML=` <span id='menos9' class="material-symbols-outlined">disabled_by_default</span> ${skils.listaNNova(lista.pizzaMista.nome,lista.pizzaMista.img,lista.pizzaMista.descricao,lista.pizzaMista.preco)} <span class="botaox" id="quantidadeFinal9"> </span>`;

let quantidadeFinal9 = document.querySelector("#quantidadeFinal9");
   quantidadeFinal9.innerHTML = ++Quantidade9;


   resultado.value -= lista.pizzaMista.preco * -1;
   
   valor.innerHTML = skils.moeda(resultado.value);

    let botaomenos = document.querySelector('#menos9')

       botaomenos.addEventListener("click", function(){

         resultado.value -= lista.pizzaMista.preco;

         valor.innerHTML = skils.moeda(resultado.value); // a função moeda modifica o valor para moeda corrente

         quantidadeFinal9.innerHTML = --Quantidade9;

         
         if (Quantidade9 == 0) {
           pizzapedida9.innerHTML = "";
         }
       })

})

pi_presunto.addEventListener('click',()=>{

pizzapedida10.innerHTML=` <span id='menos10' class="material-symbols-outlined">disabled_by_default</span> ${skils.listaNNova(lista.pizzaPresunto.nome,lista.pizzaPresunto.img,lista.pizzaPresunto.descricao,lista.pizzaPresunto.preco)} <span class="botaox" id="quantidadeFinal10"> </span>`;

let quantidadeFinal10 = document.querySelector("#quantidadeFinal10");
   quantidadeFinal10.innerHTML = ++Quantidade10;


   resultado.value -= lista.pizzaPresunto.preco * -1;
   
   valor.innerHTML = skils.moeda(resultado.value);

    let botaomenos = document.querySelector('#menos10')

       botaomenos.addEventListener("click", function(){

         resultado.value -= lista.pizzaPresunto.preco;

         valor.innerHTML = skils.moeda(resultado.value); // a função moeda modifica o valor para moeda corrente

         quantidadeFinal10.innerHTML = --Quantidade10;

         
         if (Quantidade10 == 0) {
           pizzapedida10.innerHTML = "";
         }
       })

})


pi_frangokatu.addEventListener('click',()=>{

pizzapedida11.innerHTML=` <span id='menos11' class="material-symbols-outlined">disabled_by_default</span> ${skils.listaNNova(lista.pizzaFrangokatupiri.nome,lista.pizzaFrangokatupiri.img,lista.pizzaFrangokatupiri.descricao,lista.pizzaFrangokatupiri.preco)} <span class="botaox" id="quantidadeFinal11"> </span>`;

let quantidadeFinal11 = document.querySelector("#quantidadeFinal11");
   quantidadeFinal11.innerHTML = ++Quantidade11;


   resultado.value -= lista.pizzaFrangokatupiri.preco * -1;
   
   valor.innerHTML = skils.moeda(resultado.value);

    let botaomenos = document.querySelector('#menos11')

       botaomenos.addEventListener("click", function(){

         resultado.value -= lista.pizzaFrangokatupiri.preco;

         valor.innerHTML = skils.moeda(resultado.value); // a função moeda modifica o valor para moeda corrente

         quantidadeFinal11.innerHTML = --Quantidade11;

         
         if (Quantidade11 == 0) {
           pizzapedida11.innerHTML = "";
         }
       })

})

pi_mussarela.addEventListener('click',()=>{
  pizzapedida12.innerHTML=` <span id='menos12' class="material-symbols-outlined">disabled_by_default</span> ${skils.listaNNova(lista.pizzaMussarela.nome,lista.pizzaMussarela.img,lista.pizzaMussarela.descricao,lista.pizzaMussarela.preco)} <span class="botaox" id="quantidadeFinal12"> </span>`;

let quantidadeFinal12 = document.querySelector("#quantidadeFinal12");
   quantidadeFinal12.innerHTML = ++Quantidade12;


   resultado.value -= lista.pizzaMussarela.preco * -1;
   
   valor.innerHTML = skils.moeda(resultado.value);

    let botaomenos = document.querySelector('#menos12')

       botaomenos.addEventListener("click", function(){

         resultado.value -= lista.pizzaMussarela.preco;

         valor.innerHTML = skils.moeda(resultado.value); // a função moeda modifica o valor para moeda corrente

         quantidadeFinal12.innerHTML = --Quantidade12;

         
         if (Quantidade12 == 0) {
           pizzapedida12.innerHTML = "";
         }
       })


})

//ingredientes extras

pi_queijoprato.addEventListener('click',()=>{

pizzapedida9.innerHTML=` <span id='menos9' class="material-symbols-outlined">disabled_by_default</span> ${skils.listaNNova(lista.pizzaMista.nome,lista.pizzaMista.img,lista.pizzaMista.descricao,lista.pizzaMista.preco)} <span class="botaox" id="quantidadeFinal9"> </span>`;

let quantidadeFinal9 = document.querySelector("#quantidadeFinal9");
   quantidadeFinal9.innerHTML = ++Quantidade9;


   resultado.value -= lista.pizzaMista.preco * -1;
   
   valor.innerHTML = skils.moeda(resultado.value);

    let botaomenos = document.querySelector('#menos9')

       botaomenos.addEventListener("click", function(){

         resultado.value -= lista.pizzaMista.preco;

         valor.innerHTML = skils.moeda(resultado.value); // a função moeda modifica o valor para moeda corrente

         quantidadeFinal9.innerHTML = --Quantidade9;

         
         if (Quantidade9 == 0) {
           pizzapedida9.innerHTML = "";
         }
       })

})

pi_azeitona.addEventListener('click',()=>{

pizzapedida10.innerHTML=` <span id='menos10' class="material-symbols-outlined">disabled_by_default</span> ${skils.listaNNova(lista.pizzaPresunto.nome,lista.pizzaPresunto.img,lista.pizzaPresunto.descricao,lista.pizzaPresunto.preco)} <span class="botaox" id="quantidadeFinal10"> </span>`;

let quantidadeFinal10 = document.querySelector("#quantidadeFinal10");
   quantidadeFinal10.innerHTML = ++Quantidade10;


   resultado.value -= lista.pizzaPresunto.preco * -1;
   
   valor.innerHTML = skils.moeda(resultado.value);

    let botaomenos = document.querySelector('#menos10')

       botaomenos.addEventListener("click", function(){

         resultado.value -= lista.pizzaPresunto.preco;

         valor.innerHTML = skils.moeda(resultado.value); // a função moeda modifica o valor para moeda corrente

         quantidadeFinal10.innerHTML = --Quantidade10;

         
         if (Quantidade10 == 0) {
           pizzapedida10.innerHTML = "";
         }
       })

})

pi_cheda.addEventListener('click',()=>{

pizzapedida11.innerHTML=` <span id='menos11' class="material-symbols-outlined">disabled_by_default</span> ${skils.listaNNova(lista.pizzaFrangokatupiri.nome,lista.pizzaFrangokatupiri.img,lista.pizzaFrangokatupiri.descricao,lista.pizzaFrangokatupiri.preco)} <span class="botaox" id="quantidadeFinal11"> </span>`;

let quantidadeFinal11 = document.querySelector("#quantidadeFinal11");
   quantidadeFinal11.innerHTML = ++Quantidade11;


   resultado.value -= lista.pizzaFrangokatupiri.preco * -1;
   
   valor.innerHTML = skils.moeda(resultado.value);

    let botaomenos = document.querySelector('#menos11')

       botaomenos.addEventListener("click", function(){

         resultado.value -= lista.pizzaFrangokatupiri.preco;

         valor.innerHTML = skils.moeda(resultado.value); // a função moeda modifica o valor para moeda corrente

         quantidadeFinal11.innerHTML = --Quantidade11;

         
         if (Quantidade11 == 0) {
           pizzapedida11.innerHTML = "";
         }
       })

})

pi_molho.addEventListener('click',()=>{
  pizzapedida12.innerHTML=` <span id='menos12' class="material-symbols-outlined">disabled_by_default</span> ${skils.listaNNova(lista.pizzaMussarela.nome,lista.pizzaMussarela.img,lista.pizzaMussarela.descricao,lista.pizzaMussarela.preco)} <span class="botaox" id="quantidadeFinal12"> </span>`;

let quantidadeFinal12 = document.querySelector("#quantidadeFinal12");
   quantidadeFinal12.innerHTML = ++Quantidade12;


   resultado.value -= lista.pizzaMussarela.preco * -1;
   
   valor.innerHTML = skils.moeda(resultado.value);

    let botaomenos = document.querySelector('#menos12')

       botaomenos.addEventListener("click", function(){

         resultado.value -= lista.pizzaMussarela.preco;

         valor.innerHTML = skils.moeda(resultado.value); // a função moeda modifica o valor para moeda corrente

         quantidadeFinal12.innerHTML = --Quantidade12;

         
         if (Quantidade12 == 0) {
           pizzapedida12.innerHTML = "";
         }
       })


})


pi_tomatecereja.addEventListener('click',()=>{

pizzapedida11.innerHTML=` <span id='menos11' class="material-symbols-outlined">disabled_by_default</span> ${skils.listaNNova(lista.pizzaFrangokatupiri.nome,lista.pizzaFrangokatupiri.img,lista.pizzaFrangokatupiri.descricao,lista.pizzaFrangokatupiri.preco)} <span class="botaox" id="quantidadeFinal11"> </span>`;

let quantidadeFinal11 = document.querySelector("#quantidadeFinal11");
   quantidadeFinal11.innerHTML = ++Quantidade11;


   resultado.value -= lista.pizzaFrangokatupiri.preco * -1;
   
   valor.innerHTML = skils.moeda(resultado.value);

    let botaomenos = document.querySelector('#menos11')

       botaomenos.addEventListener("click", function(){

         resultado.value -= lista.pizzaFrangokatupiri.preco;

         valor.innerHTML = skils.moeda(resultado.value); // a função moeda modifica o valor para moeda corrente

         quantidadeFinal11.innerHTML = --Quantidade11;

         
         if (Quantidade11 == 0) {
           pizzapedida11.innerHTML = "";
         }
       })

})

pi_katupiri.addEventListener('click',()=>{
  pizzapedida12.innerHTML=` <span id='menos12' class="material-symbols-outlined">disabled_by_default</span> ${skils.listaNNova(lista.pizzaMussarela.nome,lista.pizzaMussarela.img,lista.pizzaMussarela.descricao,lista.pizzaMussarela.preco)} <span class="botaox" id="quantidadeFinal12"> </span>`;

let quantidadeFinal12 = document.querySelector("#quantidadeFinal12");
   quantidadeFinal12.innerHTML = ++Quantidade12;


   resultado.value -= lista.pizzaMussarela.preco * -1;
   
   valor.innerHTML = skils.moeda(resultado.value);

    let botaomenos = document.querySelector('#menos12')

       botaomenos.addEventListener("click", function(){

         resultado.value -= lista.pizzaMussarela.preco;

         valor.innerHTML = skils.moeda(resultado.value); // a função moeda modifica o valor para moeda corrente

         quantidadeFinal12.innerHTML = --Quantidade12;

         
         if (Quantidade12 == 0) {
           pizzapedida12.innerHTML = "";
         }
       })


})
