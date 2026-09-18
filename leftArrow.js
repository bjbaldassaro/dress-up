class leftArrow extends HTMLElement {

    static tagName = 'left-arrow';

    connectedCallback() {
        this.innerHTML = `
        <button class="left-arrow">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <polygon points="100,10, 100,90, 0,50" style="fill:red"></polygon>
            </svg>
        </button>
        <style>
            .left-arrow {
                width: 100%;
                height: 100%;
                padding: 0;
                background-color: transparent;
                border: none;
                touch-action: manipulation;
            }

            .left-arrow svg {
                width: 100%;
                height: 100%;
            }

            .left-arrow polygon {
                cursor: pointer;   
            }

        </style>
        `
    }
    
}

customElements.define(leftArrow.tagName, leftArrow);
