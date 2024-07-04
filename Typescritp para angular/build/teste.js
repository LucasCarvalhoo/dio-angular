"use strict";
class Colaborador {
    constructor(nome, idade, id) {
        this.nome = nome;
        this.idade = idade;
        this.id = id;
    }
    exibirInfo() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, ID: ${this.id}`);
    }
}
const dadosColaborador = ["João", 30, 123456];
const colaborador2 = new Colaborador(...dadosColaborador);
colaborador2.exibirInfo();
