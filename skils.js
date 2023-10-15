

function currency(valor){
    let resultado2;
    let formate = new Intl.NumberFormat("pt-BR",{style:"currency", currency:'BRL', minimumFractionDigits:2,})
     
    resultado2 = formate.format(valor)
    
    return resultado2
}

function listaNovaa(nome,imagem,descricao,preco){
    let formate = new Intl.NumberFormat("pt-BR",{style:"currency", currency:'BRL', minimumFractionDigits:2,})
    let listaNova;
   listaNova = ` <br><div><p>${nome}</p></div>
  <div><img src="${imagem}" class="imagem" alt=""></div>
  <div><p>Descrição:${descricao}</p></div>
  <div><p>Preço:${formate.format(preco)}</p></div> <p>Quantidade:<p> `;

  return listaNova

}





export default{
    moeda:currency,
    listaNNova: listaNovaa

}