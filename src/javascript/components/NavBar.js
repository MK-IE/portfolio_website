export const mountNavBar = (element) => {

    element.addEventListener("click", () => {
        element.children[0].classList.toggle("hide");
        
    });

    let originX = -1;
    let originY = -1;

    element.addEventListener("mousedown", (event) => {
        originX = event.clientX;
        originY = event.clientY;
    });

    element.addEventListener("mousemove", (event) => {
        event.preventDefault();
        if(event.buttons === 1) {
            let positionX = originX - event.clientX;
            let positionY = originY - event.clientY;
            originX = event.clientX;
            originY = event.clientY;

            event.target.style.left = `${event.target.offsetLeft - positionX}px`;
            event.target.style.top = `${event.target.offsetTop - positionY}px`;
        }
    });

    element.addEventListener("mouseup", (event) => {
        
    });
};