/* eslint-disable indent */
import { LitElement, html, css } from "lit";

export class RickAndMorty extends LitElement {
    static get properties() {
        return {
            name: { type: String },
            photoUrl: { type: String },
            episodes: { type: Array }
        };
    }

    static get styles() {
        return css`
            div {
                margin: 5px;
                text-align: center;
            }
            img {
                border-radius: 50%;
                box-shadow: 
                    4px 4px 2px black,
                    6px 6px 2px white;
            }
        `;
    }

    render() {
        return html`
        <div>
            <img src="${this.photoUrl}" alt="">
            <h3>${this.name}</h3>
            <div>${this.episodes}</div>
        </div>
        `;
    }
}

customElements.define("base-element", RickAndMorty);
