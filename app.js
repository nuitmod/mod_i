import { html, Component, render } from 'https://unpkg.com/htm/preact/index.mjs?module';
//import menu_2 from "./components/menu.js";
import  Item_menu  from "./components/menu.js";
import I_search from "./components/items.js";


var App=()=>html`
<div>
<${Item_menu} />
<${I_search} />
</div>
`



render(App(), document.getElementById("root"))
