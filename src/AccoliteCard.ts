import { html, css, LitElement, } from 'lit';
import { property } from 'lit/decorators.js';

export class AccoliteCard extends LitElement {
    static styles = css`
    .card {
        padding: 25px;
        border: 1px solid #ff8500;
        font-family: Verdana, Helvetica, sans-serif;
        text-decoration: none;
        display: flex;
        position: relative;
        flex-direction: column;
        font-size: 16px;
        border-radius: 12px;
        transition-duration: 0.3s;
        width: 250px;
        cursor: pointer;
    }
    .title-xs{
        font-size: 16px;
    }
    .title-s{
        font-size: 20px;
    }
    .title-m{
        font-size: 24px;
    }
    .title-l{
        font-size: 28px;
    }
    .title-xl{
        font-size: 36px;
    }
    .soild {
        background-color: #ff8500; 
        color: white;
    }
    .soild:hover {
        background-color: #ce6b01; 
    }
    .neutral {
        border: none;
        background-color: inherit;
        font-weight: 500
    }
    .outlined {
        background-color: white;
        border-width:2px;
        color: black;
    }
    .outlined:hover {
        background-color: #ff8500; 
        color: white;
    }
    .children{
        margin:16px 0px;
    }
    .actionButton{
        color: #ff8500; 
        border: none;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        padding:0px;
        background-color: inherit;
        font-weight: 500;
        cursor: pointer;
    }
    .actionButtonContainer {
        position: sticky;
        bottom: 25;
    }
    .soild > .actionButtonContainer > .actionButton{
        color: #ffffff;
    }
    .outlined:hover > .actionButtonContainer > .actionButton{
        color: #ffffff;
    }
    .actionButton:hover {
        color: #ce6b01; 
    }
    img{
        background-color:white;
        width:auto;
        margin: -25px;
        margin-bottom: 16px;
        border-radius: 12px 12px 0px 0px;
    }
  `;

    constructor() {
        super();
        this.cardTitle = "Card Title";
        this.titleSize = "s";
        this.fill = "solid";
        this.actionLabel = "Read more";
        this.minHeight = 0;
        this.imageHeight = 150;
        this.imageSrc = '';
    }

    @property({ type: String })
    cardTitle: string;

    @property({ type: String })
    titleSize: string;

    @property({ type: String })
    fill: string;

    @property({ type: String })
    actionLabel: string;

    @property({ type: Number })
    minHeight: number;

    @property({ type: Number })
    imageHeight: number;

    @property({ type: String })
    imageSrc: string;

    render() {
        return html`
            <div class=${`card ${this.fill}`} style=${`min-height : ${this.minHeight}px`}>
                <img src=${this.imageSrc} alt="placeholder" width="250" height=${this.imageHeight} />
                <div class=${`title-${this.titleSize}`}>
                    ${this.cardTitle}
                </div>
                <div class=${`children`}>
                    <slot></slot>
                </div>
                <div class="actionButtonContainer">
                    <button class=${`actionButton`}>${this.actionLabel}</button>
                </div>
            </div>
        `;
    }
}
