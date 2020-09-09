export const type = (element, delay) => {
    const typeElement = document.getElementById(element);
    const text = typeElement.innerText;
    let editableText = text;
    console.log(typeElement);
    for (let index = 0; index < text.length; index++) {
        console.log(editableText);
        setTimeout(() => {
            editableText = editableText.substring(0, editableText.length - 1);
            typeElement.innerText = editableText;
            console.log(editableText);
        }, index * delay + Math.ceil(Math.random() * 10));
    }
};
