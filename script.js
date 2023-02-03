// 01 - Crie um array que receba 5 itens e exiba no console.
sacolaPlastica = ["laranja ", "maçã ", "alho ", "pepino ", "limão"];

console.log("Itens na sacola: "+sacolaPlastica);

// 02 - Utilize um método para adicionar um nome ao inicio do array.
sacolaDePapel = ["pepino ", "laranja"];
sacolaDePapel.unshift("jambo")

console.log(sacolaDePapel);

// 03 - Utilize um método para remover o último nome do array.
lista = [14, 15, 16, 22, 23, 24, 25];
lista.pop();

console.log("A lista: "+lista);

// 04 - Utilize um método para adicionar dois nomes ao fim do array.
paises = [" Brasil", " EUA", " França"];

paises.push("Angola","China");
console.log("Nomes de Países: "+paises);

// 05 - Utilize um método para remover o primeiro nome do array.
algunsPaises = ["EUA"," Brasil"," França"];

algunsPaises.shift();
console.log(algunsPaises);


// 06 - Utilize um método para organizar em ordem crescente o seguinte array: 
let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort();
console.log("Sequência de números: "+numbers);

// 07 - Crie um objeto que receba ao menos três propriedades sobre você.
 lorena = [" idade - 19",
 "formação - Técnico em Informática",
 "umGosto - aprender"];

// 08 - Adicione uma nova propriedade sem alterar seu objeto inicial.
lorena.splice(3,1," umDesgosto - pimentão");

// 09 - Remova uma propriedade desse objeto.
lorena.splice(0,1,);

// 10 - Mostre no console todas as propriedades desse objeto.
console.log("Eu: "+lorena);

// 11- Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
// Na propriedade amigos, adicione ao menos 4 itens.

let cadastro = [ 
   func1 = {nome: "João", idade: 20, telefone: "(21)96554-5555", amigos: {
    amigo1: "Carlos", 
    amigo2:"Tadeu", 
    amigo3:"Annie"

    } },
    func2 = {nome: "Maria", idade: 18, telefone: "(21)96554-5577", amigos:{ 
        amigo1:  "Rafaela", 
        amigo2: "Rafael", 
        amigo3: "Sofia" 
    
       }},
    func3 = {nome: "Matias", idade: 22, telefone: "(21)92254-5155", amigos:{
        amigo1:"Paulo", 
        amigo2:"Tobias",
        amigo3:"Annie"
    
       }},
       func4 = {nome: "Adriane", idade: 32, telefone: "(23)92999-5155", amigos: {
        amigo1:" Paula", 
        amigo2:"Zofia ",
        amigo3:"Algusto ",
        
       
       }},
       func5 = {nome: "Joana", idade: 29, telefone: "(24)92988-5662", amigos: {
        amigo1:"Laura ", 
        amigo2:" Ana",
        amigo3:" Sara",
        
    }},
];

// 12 - Mostre no console o nome de um amigo de cada lista.
console.log("Amigos dos funcionários: "+func1.amigos.amigo1," , "+func2.amigos.amigo1," , "+func3.amigos.amigo1," , "+func4.amigos.amigo1," , "+func5.amigos.amigo1 );



// for () {
//     console.log();

// }