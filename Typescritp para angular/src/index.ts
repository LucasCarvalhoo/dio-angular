// Objetos
class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }
}

const p1 = new Pessoa("Lucas", 22);
console.log(p1);

class Colaborador extends Pessoa{
    matricula: number;

    constructor(nome: string, idade: number, matricula: number){
        super(nome, idade);
        this.matricula = matricula;
    }

    exibirInfo(): void {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, ID: ${this.matricula}`);
      }
}

const colaborador1 = new Colaborador("Pedro", 22, 123456);
console.log(colaborador1);

const dadosColaborador: [string, number, number] = ["João", 30, 123456]; // usando tuplas eu posso passar os elementos como paramentros 
const colaborador2 = new Colaborador(...dadosColaborador);
colaborador2.exibirInfo();


// Array
let dados: string[] = ["Lucas", "Caio", "Alan"];
let dados2: Array<string> = ["Lucas", "Caio", "Alan"];

// Arrays multi Types
let dados3: Array<string | number> = ["Lucas", 22];

console.log(dados3);


