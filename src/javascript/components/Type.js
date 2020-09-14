export default class Type {
    constructor(elementId, delay, dictionary) {
        const randomText = Math.floor(Math.random() * dictionary.length);
        this.textElement = document.getElementById(elementId);
        this.text = dictionary[randomText];
        this.replenishText = "";
        this.dictionary = dictionary;
        this.delay = delay;
    }

    pickLine() {
        const randomText = Math.floor(Math.random() * this.dictionary.length);
        this.replenishText = this.dictionary[randomText];
    }

    type() {
        this.render(0, 0, this.delay);
    }

    displayText() {
        this.textElement.innerText = this.text;
    }

    addLetter() {
        const addLetter = this.replenishText.charAt(0);
        this.replenishText = this.replenishText.substring(1);
        this.text += addLetter;
    }

    deleteLetter() {
        this.text = this.text.substring(0, this.text.length - 1);
    }

    render(startTime, timeElapsed, delay) {
        let currentTime = Math.floor(timeElapsed) - startTime;

        this.displayText();
        if (currentTime >= delay) {
            startTime = Math.floor(timeElapsed);

            if (this.text.length > 0 && this.replenishText.length <= 0) {
                this.deleteLetter();
            } else if (this.replenishText.length <= 0) {
                this.pickLine();
            } else {
                this.addLetter();
            }
        }

        requestAnimationFrame((time) => this.render(startTime, time, delay));
    }
}
