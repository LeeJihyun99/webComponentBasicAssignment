class Button extends HTMLElement{
    constructor(){
        super();
        this._isHidden=false;
        this._button;
        this.attachShadow({mode:'open'});
        this.shadowRoot.innerHTML=
        `
        <style>
            #info-box {
             display: none;
            }
        </style> 
        <slot></slot><p id='info-box'>Click the button to hide this!</p>`
    }
    connectedCallback(){
        this._button = document.createElement('button');
        this._infoEl =this.shadowRoot.querySelector('p');
        this._button.textContent = 'Show';
        this._button.addEventListener('click', this._buttonClicked.bind(this));
        this.appendChild(this._button);
    }

    _buttonClicked(){
        this._isHidden = !this._isHidden;
        this._infoEl.style.display = this._isHidden ? 'block': 'none';
        this._button.textContent = this._isHidden ? 'Hide': 'Show';
        
    }
}

customElements.define('lee-button', Button);