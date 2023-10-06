

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
let portuguesa = new pizzas('Portuguesa','./img/portuguesa-removebg-preview.png','molho, ovo, oregano, queijo, azeitona',42)
let quatroQueijos = new pizzas('Quatro queijos','./img/pizaquatroqueijos-removebg-preview.png','molho,queijo mussarela, queijo gongorzola, queijo suicço,',35)
let marguerita = new pizzas('Marguerita','/img/marguerit250-removebg-preview.png','queijo,tomate, molho,azeitona', 38)
let calabresa = new pizzas('Calabresa','./img/calabresa-removebg-preview.png','calabresa, queijo, tomate, molho,', 35)
let modadacasa_especial =  new pizzas('Moda da casa', '#', 'lombinho, molho, cebola, queijo, aceitona', 55)
let paraense = new pizzas('Paraense', '#','camararão, jambu, queijo, molho, aceitona', 65)
let palmito = new pizzas('Palmito', '#','Palmito, molho, queijo, aceitona, presunto, cebola', 75)
let Picanha = new pizzas('Picanha com batata', '#', 'Picanha, batata frita, molho, aceitona, cebola, queijo')



//portuguesa.nome = 'quatro queijos'
//portuguesa.img = 'nao sei'
//portuguesa.descricao = 'molho,queijo,oregano'
//portuguesa.preco = 32

export default{
    pizzaPortuguesa: portuguesa,
    pizzaQqueijos: quatroQueijos,
    pizzmarguerita: marguerita,
    pizzCalabresa: calabresa,
    pizzaLombinho : modadacasa_especial,
    pizzaParaense : paraense,
    pizzaPicanha : Picanha,
    pizzaPalmito: palmito
}



