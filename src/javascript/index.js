import "../css/style.css";

import { TYPE_LINES } from "./components/Constant";
import Type from "./components/Type";
import Terminal from "./components/Terminal";

const text = new Type("type", 400, TYPE_LINES);
const terminal = new Terminal("mini-editor");
text.type();
terminal.bootUp();
