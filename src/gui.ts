import {LitElement, html} from 'lit';
import './components/App';

export class gui extends LitElement {

    constructor() {
        super();
    }

    render() {
        return html`
            <bp-app></bp-app>
        `
    }
}

customElements.define('bp-gui', gui);