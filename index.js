const express = require("express");
const app = express();

const pizzas = [
    {
        id: 1,
        sabor: "Muzzarela",
        categoria: "Salgada",
        preco: 15.89
    },
    
    {
        id: 2,
        sabor: "Morango com Nutela",
        categoria: "Doce",
        preco: 30.0
    },

    {
        id: 3,
        sabor: "Brocolis",
        categoria: "Salgada",
        preco: 35
    },

    {
        id: 4,
        sabor: "Lombo Canadense",
        categoria: "Salgada",
        preco: 25   
    }

];

const listarTodasAsPizzas = () => {

    let conteudo = "";

    pizzas.forEach(pizza => {
        conteudo += `
            id: ${pizza.id}
            Sabor: ${pizza.sabor} 
            Categoria: ${pizza.categoria}
            Preço: ${pizza.preco}

        `
    })

    return conteudo;
};



const adicionarPizza = function(sabor, categoria, preco) {
    const pizzaNova = {
        id: pizzas[pizzas.length - 1].id +1,
        sabor,
        categoria,
        preco
    }
    
    pizzas.push(pizzaNova);

    console.log(`A pizza de ${sabor} foi adicionada com sucesso!`)
}



 adicionarPizza("Catupiry", "Salgada", 40);
 adicionarPizza("Chocolate com Banana", "Doce", 55);
 adicionarPizza("Rucula", "Salgada", 37.5);
 adicionarPizza("Lindit", "Doce", 70);
 adicionarPizza("Frango com catupiry", "Salgada", 35);
 


console.log(listarTodasAsPizzas());

const pesquisaPizzaPeloSabor = function (sabor) { 
    let resuladoDaBusca = " ";

    for(pizza of pizzas) {
       if(pizza.sabor == sabor) {
            resultadoDaBusca = pizza;
            break;
        } else {
            resuladoDaBusca = `A pizza sabor ${sabor} não foi encontrada.`;

        }
    }
        return resuladoDaBusca;
    
}

console.log(pesquisaPizzaPeloSabor("Morango"))

