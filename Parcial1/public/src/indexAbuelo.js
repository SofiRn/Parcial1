import data from "./src/data/data.js"
import * as components from './components/indexPadre.js';

class appContainer extends HTMLElement {

    constructor() {
        super();
        this.attachShadow [{mode: 'open'}];
    }

   
    connectedCallback(){
        this.render();
    }


    render(){
        data.forEach ((element)) => {
        { this.shadowRoot.innerHTML()=`
        <h1>Bershka</h1>
        <section>
        <my-card>
        image="${image}", 
        tittle="${tittle}"
        </my-card>
        </section>
        `
    }}}
}

customElements.define("app-container", appContainer); 


