import "../css/style.css";
import "../css/all.css";
import {mountNavBar} from "./components/NavBar";

const navBar = document.getElementById("nav-bar");
// Make the DIV element draggable:
mountNavBar(navBar);
