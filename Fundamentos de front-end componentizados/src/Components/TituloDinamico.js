class TituloDinamico extends HTMLElement{
    construtor(){
        super();

        const shadow = this.attachShadow({mode: "open"});


    }
}

customElements.define("titulo-dinamico", TituloDinamico);