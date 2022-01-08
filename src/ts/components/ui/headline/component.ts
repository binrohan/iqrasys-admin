import html from './template.html';

const template = document.createElement('template');
template.innerHTML = `<p>WHY</p>`;

export default class Headline extends HTMLElement {

    constructor() {
        super();
        
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('head-line', Headline);
