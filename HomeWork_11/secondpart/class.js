class Options {
    constructor(height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv(){
        var div = document.createElement('div');
        div.innerHTML = "Hello";

        div.style.height = this.height;
        div.style.width = this.width;
        div.style.background = this.bg;
        div.style.fontSize = this.fontSize;
        div.style.textAlign = this.textAlign;
        document.body.appendChild(div);
    }
}

var divElement = new Options('100px', '100px', 'red', '18px', 'center');
divElement.createDiv();