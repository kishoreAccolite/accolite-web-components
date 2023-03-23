import { html, css, LitElement,  } from 'lit';
import { property } from 'lit/decorators.js';

export class AccoliteButton extends LitElement {
  static styles = css`
    .soild {
        background-color: #4CAF50; 
        border: none;
        color: white;
        padding: 15px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        border-radius: 12px;
        transition-duration: 0.2s;
    }
    .soild:hover {
        background-color: #439a48; 
    }
    .soild:disabled {
        background-color: #656565; 
    }
    .flat {
        color: #4CAF50; 
        border: none;
        padding: 15px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        transition-duration: 0.2s;
        background-color: inherit;
        font-weight: 600
    }
    .flat:hover {
        color: #439a48; 
    }
    .flat:disabled {
        color: #656565; 
    }
    .outlined {
        background-color: white;
        color: black;
        border: 2px solid #4CAF50;
        padding: 15px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        border-radius: 12px;
        transition-duration: 0.4s;
    }
    .outlined:hover {
        background-color: #4CAF50; 
        color: white;
    }
    .outlined:disabled {
        border-color: #656565;
        background-color: inherit;
        color: #656565;
    }
  `;

  constructor(){
    super();
    this.label="Button";
    this.fill="solid";
    this.isDisabled="false";
  }

  @property({ type: String }) 
  label : string;

  @property({ type: String }) 
  fill : string;

  @property({type: String }) 
  isDisabled : string;

  render() {
    return html`
      <button class=${this.fill} .disabled=${this.isDisabled==="true"}>${this.label}</button>
    `;
  }
}
