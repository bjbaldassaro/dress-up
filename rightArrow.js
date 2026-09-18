class rightArrow extends HTMLElement {

    static tagName = 'right-arrow';

    connectedCallback() {
        this.innerHTML = `
        <button class="right-arrow">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <polygon points="0,10, 0,90, 100,50" style="fill:red"></polygon>
            </svg>
        </button>
        <style>
            .right-arrow {
                width: 100%;
                height: 100%;
                padding: 0;
                background-color: transparent;
                border: none;
                touch-action: manipulation;
            }

            .right-arrow svg {
                width: 100%;
                height: 100%;
            }

            .right-arrow polygon {
                cursor: pointer;   
            }

        </style>
        `
    }
    
}

customElements.define(rightArrow.tagName, rightArrow);
