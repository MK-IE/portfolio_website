import { KEYS_TO_PREVENT, KEYS_TO_IGNORE } from "./Constant";

export default class Dinosaur {
    constructor(elementId) {
        this.terminal = document.getElementById(elementId);
        this.lineIndex = 0;
        this.lineCharacterIndex = 0;
        this.preventKeys = KEYS_TO_PREVENT;
        this.ignoreKeys = KEYS_TO_IGNORE;
        this.terminal.innerHTML += `<div name="1" class="line"></div>`;
    }

    keysToPrevent(event) {
        for (let key = 0; key < this.preventKeys.length; key++) {
            if (event.key.toLowerCase() === this.preventKeys[key]) {
                event.preventDefault();
            }
        }
    }

    addNewLine() {
        this.terminal.innerHTML += `<div name="${
            this.lineIndex + 1
        }"class="line"></div>`;
    }

    moveUpLine() {
        if (this.lineIndex > 0) {
            this.lineIndex--;
        }
    }

    moveDownLine() {
        if (this.lineIndex < this.terminal.children.length - 1) {
            this.lineIndex++;
        }
    }

    moveCharacterLeft() {
        if (this.lineCharacterIndex > 0) {
            this.lineCharacterIndex--;
        }
    }

    moveCharacterRight() {
        const currentLine = this.terminal.children[this.lineIndex];
        if (this.lineCharacterIndex < currentLine.textContent.length - 1) {
            this.lineCharacterIndex++;
        }
    }

    deleteCharacter(line, start, end) {
        return line.substring(start, end);
    }

    checkIfLineIsEmpty(line) {
        if (line.length <= 0 && this.lineIndex > 0) {
            this.terminal.children[this.lineIndex--].remove();
        }
    }

    writeCode(key) {
        const currentLine = this.terminal.children[this.lineIndex];
        const currentLineText = currentLine.textContent.split("");

        for (let keyIndex = 0; keyIndex < this.ignoreKeys.length; keyIndex++) {
            if (key.toLowerCase() === this.ignoreKeys[keyIndex]) {
                return "";
            }
        }

        switch (key.toLowerCase()) {
            case "enter":
                this.lineIndex++;
                this.addNewLine();
                break;
            case "backspace":
                this.checkIfLineIsEmpty(currentLineText);
                currentLineText.pop();
                break;
            case "arrowup":
                this.moveUpLine();
                console.log("moveup");
                break;
            case "arrowdown":
                this.moveDownLine();
                console.log("movedown");
                break;
            case "arrowleft":
                this.moveCharacterLeft();
                break;
            case "arrowright":
                console.log(this.lineCharacterIndex);
                this.moveCharacterRight();
                break;
            case " ":
                currentLineText.push(" ");
                break;
            case "tab":
                currentLineText.push(" ");
                break;
            default:
                if (this.lineCharacterIndex > 0) {
                    currentLineText.splice(this.lineCharacterIndex, 0, key);
                } else {
                    currentLineText.push(key);
                }
                break;
        }
        currentLine.textContent = currentLineText.join("");
    }

    keyboard(event) {
        this.writeCode(event.key);
        this.keysToPrevent(event);
    }

    keyboardListener() {
        this.terminal.addEventListener("keydown", (event) =>
            this.keyboard(event)
        );
    }

    bootUp() {
        this.keyboardListener();
    }
}
