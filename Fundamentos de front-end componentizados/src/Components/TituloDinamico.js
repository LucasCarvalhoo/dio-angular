class TituloDinamico extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"}); // 

        // base do component h1
        const componentRoot = document.createElement("h1"); // criei o meu elemento
        componentRoot.textContent = "My News"; // conteudo do meu elemento

        // estilizar o component
        const style = document.createElement("style"); // criei uma tag style pra estilizar o meu component

        style.textContent = `
            h1{
                color: red;
            }
        `
        // enviar para a shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);

    }
}

customElements.define("titulo-dinamico", TituloDinamico);