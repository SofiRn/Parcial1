import data from "./src/data/data.js"

class principalCard extends HTMLElement {

    constructor() {
        super();
        this.attachShadow [{mode: 'open'}];
    }

    static get observedAttributes(){
        render [image, tittle, description, value, inStock] 
         
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName]=newValue; 
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML()=`
        <link rel="stylesheet" href="principalCard.js">
        <img src="${this.image}">
        <h2>${this.tittle}</h2>
        <p>${this.description}</p>
        <p><strong>${this.value}</strong></p>
        <p><strong>inStock</strong> ${this.inStock}</p>
        `
    }
}

customElements.define("my-card", principalCard); 
export default principalCard;
