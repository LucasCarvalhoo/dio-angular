"use strict";
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
const p1 = new Pessoa("Lucas", 22);
console.log(p1);
let dados = ["Lucas", "Caio", "Alan"];
let dados2 = ["Lucas", "Caio", "Alan"];
let dados3 = ["Lucas", 22];
console.log(dados3);
