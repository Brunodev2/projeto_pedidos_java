

function currency(valor){
    let resultado2;
    let formate = new Intl.NumberFormat("pt-BR",{style:"currency", currency:'BRL', minimumFractionDigits:2,})
     
    resultado2 = formate.format(valor)
    
    return resultado2
}

function listaNovaa(nome,imagem,descricao,preco){
    let listaNova;
   listaNova = ` <br><div><p>${nome}</p></div>
  <div><img src="${imagem}" class="imagem" alt=""></div>
  <div><p>Descrição:${descricao}</p></div>
  <div><p>Preço:${preco}</p></div><div><p>Quantidade: <div id="quantidadeFinal"> </div> <p></div> `;

  return listaNova

}

function listaNovab(nome,imagem,descricao,preco,){
    let listaNova2;
   listaNova2 = ` <br><div><p>${nome}</p></div>
  <div><img src="${imagem}" class="imagem" alt=""></div>
  <div><p>Descrição:${descricao}</p></div>
  <div><p>Preço:${preco}</p></div> </span>`

  return listaNova2

}


export default{
    moeda:currency,
    listaNNova: listaNovaa,
    listaNNova2: listaNovab

}