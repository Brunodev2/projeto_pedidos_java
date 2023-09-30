

class pizzas
{
           //atributos da class = variaveis ou caracteristicas
nome
img
descricao
preco

    // metodo construtor para adicionar informacões
    constructor(nome,img,descricao,preco)
    {
     this.nome = nome
     this.img = img
     this.descricao = descricao
     this.preco = preco

    }

}

//criar um novo objeto a parti de uma class
let portuguesa = new pizzas('Portuguesa','./img/portuguesa.jpg','molho, ovo, oregano, queijo, azeitona',42)
let quatroQueijos = new pizzas('Quatro queijos','./img/quatro1.png','molho,queijo mussarela, queijo gongorzola, queijo suicço,',35)
let marguerita = new pizzas('Marguerita','#','queijo,tomate, molho,azeitona', 38)


//portuguesa.nome = 'quatro queijos'
//portuguesa.img = 'nao sei'
//portuguesa.descricao = 'molho,queijo,oregano'
//portuguesa.preco = 32

export default{
    pizzaPortuguesa: portuguesa,
    pizzaQqueijos: quatroQueijos,
    pizzmarguerita: marguerita
}



