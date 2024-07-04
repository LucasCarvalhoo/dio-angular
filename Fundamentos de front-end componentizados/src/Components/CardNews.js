class Cardnews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }
    // vai construir o meu elemento, a minha div
    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card")

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left")
        const span = document.createElement("span");
        const h1 = document.createElement("h1");
        const p = document.createElement("p");

        cardLeft.appendChild(span);
        cardLeft.appendChild(h1);
        cardLeft.appendChild(p);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right")
        const img = document.createElement("img");
        cardRight.appendChild(img);
        img.setAttribute("src", "../assets/asset-vader.png")

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles(){
        
    }
}

customElements.define("card-news", Cardnews);