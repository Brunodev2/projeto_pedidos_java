
import lista from "./lista.js";

let listaPizza =  document.querySelector('#listaPizza')


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

     
listaPizza.innerHTML += `<div><p>Tipo:${lista.pizzaPortuguesa.nome}</p></div>
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
  `;
