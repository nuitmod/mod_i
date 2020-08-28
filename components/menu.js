import { html, Component, render } from 'https://unpkg.com/htm/preact/index.mjs?module';
import { observer } from '../modules/mobx_preact.module.js';
import imob from "./mobx_store.js";
import  * as jQuery from "https://unpkg.com/jquery@3.3.1/dist/jquery.min.js";

var $ = window.jQuery;
/*
$('.mobile_items a').on('click', ()=>{
  $('.big_i').hide();
})
*/
var select_i=i=>{
  imob.inf=i.name;
  imob.type=i.name;
  $('.big_i').hide();
  imob.data.forEach(wm=>wm.active=false)
}


var Item_menu=()=>{

var item_list=imob.it_list.map(i=>html`
   <ul class="mobile__items" key=${i.name} onclick=${()=>select_i(i)}>
     <li><a href="#">${i.name}</a></li>
   </ul>
`)

return html`
<nav class="mobile">
    ${item_list}
  </nav>
`};



export default observer(Item_menu);
