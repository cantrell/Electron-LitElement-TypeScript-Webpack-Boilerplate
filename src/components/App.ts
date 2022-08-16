import {LitElement, html, css} from 'lit';

export class App extends LitElement {

    static styles = css`
        h1 {
            width: 100%;
            margin: auto;
            text-align: center;
            padding-top: 40vh;
        }
  `;

    constructor() {
        super();
    }

    render() {
        return html`
            <h1>Hello, world.</h1>
        `
    }
}

customElements.define('bp-app', App);