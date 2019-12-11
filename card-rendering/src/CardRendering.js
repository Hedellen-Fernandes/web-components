import { html, css, LitElement } from 'lit-element';

export class CardRendering extends LitElement {
  static get styles() {
    return css`
      :host {
        --card-rendering-text-color: #000;

        display: block;
        padding: 25px;
        color: var(--card-rendering-text-color);
      }

      .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        width: 300px;
      }

      .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
      }

      .container {
        padding: 2px 16px;
      }
    `;
  }

  static get properties() {
    return {
      name: { type: String },
      description: { type: String },
      url: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'John Doe';
    this.description = '';
    this.url = null;
  }

  render() {
    return html`
      <div class="card">
        <img src="${this.url}" alt="${this.name}" style="width:100%">
        <div class="container">
          <h4><b>${this.name}</b></h4>
          <p>${this.description}</p>
        </div>
      </div>
    `;
  }
}
