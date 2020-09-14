import { KEYS_TO_PREVENT, KEYS_TO_IGNORE } from "./Constant";

export default class Dinosaur {
    constructor(elementId) {
        this.terminal = document.getElementById(elementId);
        this.lineIndex = 0;
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
                let terminalText = currentLine.textContent;
                this.checkIfLineIsEmpty(terminalText);
                currentLine.textContent = this.deleteCharacter(
                    terminalText,
                    0,
                    terminalText.length - 1
                );
                break;
            case " ":
                currentLine.textContent += " ";
                break;
            case "tab":
                currentLine.textContent += " ";
                break;
            default:
                currentLine.textContent += key;
                break;
        }
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
