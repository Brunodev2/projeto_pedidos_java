

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
//tradicionais
let portuguesa = new pizzas('Portuguesa','./img/portuguesa-removebg-preview.png','molho, ovo, oregano, queijo, azeitona',42)
let quatroQueijos = new pizzas('Quatro queijos','./img/pizaquatroqueijos-removebg-preview.png','molho,queijo mussarela, queijo gongorzola, queijo suicço,',35)
let marguerita = new pizzas('Marguerita','./img/marguerit250-removebg-preview.png','queijo,tomate, molho,azeitona', 38)
let calabresa = new pizzas('Calabresa','./img/calabresa-removebg-preview.png','calabresa, queijo, tomate, molho,', 35)
//especiais

let lombinho =  new pizzas('Lombinho', '#', 'lombinho, molho, cebola, queijo, aceitona', 55)
let paraense = new pizzas('Paraense', '#','camararão, jambu, queijo, molho, aceitona', 65)
let palmito = new pizzas('Palmito', '#','Palmito, molho, queijo, aceitona, presunto, cebola', 75)
let Picanha = new pizzas('Picanha com batata', '#', 'Picanha, batata frita, molho, aceitona, cebola, queijo',68)
// promocionais
let mista = new pizzas('Mista','#','molho, presunto, queijo, cebola, tomate', 32)
let mussarela = new pizzas('Mussarela','#','molho, queijo mussarela, tomate cereja, aceitona', 31)
let presunto = new pizzas('Presunto','#','presunto, molho, queijo, cebola, aceitona',33)
let frango_katupiri = new pizzas('Frango com katupiri','#','frango desfiado, katupiri, molho, cebola, queijo,',34)
//ingredientes extras
let queijo = new pizzas('Queijo', 5)
let presuntoExtra = new pizzas('presunto', 4)
let tomatecereja = new pizzas("Tomate cereja", 3);
let molho = new pizzas("Molho", 3);
let azeitona = new pizzas("Azeitona", 3);
let Borda = new pizzas("Borda recheada katupiri", 7);


//portuguesa.nome = 'quatro queijos'
//portuguesa.img = 'nao sei'
//portuguesa.descricao = 'molho,queijo,oregano'
//portuguesa.preco = 32

export default{
    //tradicionais
    pizzaPortuguesa: portuguesa,
    pizzaQqueijos: quatroQueijos,
    pizzmarguerita: marguerita,
    pizzCalabresa: calabresa,
    //especiais
    pizzaLombinho : lombinho,
    pizzaParaense : paraense,
    pizzaPicanha : Picanha,
    pizzaPalmito: palmito,
    //promocionais
    pizzaFrangokatupiri:frango_katupiri,
    pizzaMussarela:mussarela,
    pizzaPresunto:presunto,
    pizzaMista:mista
    // ingredientes extras 

}



