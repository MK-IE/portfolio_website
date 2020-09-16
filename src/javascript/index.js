import "../css/style.css";
import "../css/all.css";
import { TYPE_LINES } from "./components/Constant";
import Type from "./components/Type";

const text = new Type("type", 400, TYPE_LINES);

const helloThere = (url) => {
    const image = new Image();

    image.onload = function () {
        var style = [
            "font-size: 1px;",
            "line-height: " + this.height + "px;",
            "padding: " + this.height * 0.5 + "px " + this.width * 0.5 + "px;",
            "background-size: " +
                this.width / 2 +
                "px " +
                this.height / 2 +
                "px;",
            "background: url(" + url + ");",
        ].join(" ");
        console.log("%c ", style);
    };
    image.src = url;
};

text.type();
helloThere("https://i.kym-cdn.com/photos/images/newsfeed/001/475/422/473.jpg");
