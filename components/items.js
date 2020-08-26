//import {html, render} from 'https://unpkg.com/lit-html?module';
import { html, Component, render } from 'https://unpkg.com/htm/preact/index.mjs?module';
import { observer } from '../modules/mobx_preact.module.js';
import imob from "./mobx_store.js";
import { autorun, toJS } from '../modules/mobx.module.js';
import  * as $ from "https://unpkg.com/jquery@3.3.1/dist/jquery.min.js";
//import  * as _ from "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.19/lodash.min.js";


var $$ = window.$;
//var __ = window._;

var temp={
  name: ''
}

var add_to_bug=e=>{
  console.log(e.target.id);
//  console.log(term)
}

var show_res=e=>{
//  e.preventDefault();
//  console.log(e.target.value);
  imob.type=e.target.value; console.log(temp.name);
  temp.name=""; console.log(temp.name);
  $$('.big_i').hide();
}

var handle_submit=e=>{
  e.preventDefault();
//  temp.name=""
  console.log(imob.type);
}

var I_search=()=>{

var big_item=imob.data.filter(wm=>wm.active==true).map(wm=>html`
  <div class="big_i" key=${wm.id}>
    <img id=${wm.img_id} src="./img/${wm.img_id}.JPG"  height="129" width="92" />
    <div>
      <li>name: ${wm.name} </li>
      <li>color: ${wm.color} </li>
      <li>category: ${wm.category} </li>
      <li>active: ${wm.active} </li>
      <button id=${wm.img_id} onclick=${add_to_bug}>add</button>
    </div>
  </div>`)


var wm_list=imob.data.filter(w=>w.category==imob.type).map(wm=>html`
  <div class="list" key=${wm.id}>
    <img id=${wm.img_id} src="./img/${wm.img_id}.JPG"  height="89" width="52" />
     <div>
        <li>name: ${wm.name} </li>
        <li>color: ${wm.color} </li>
        <li>category: ${wm.category} </li>
        <button id=${wm.img_id} class="show" value="show" onclick=${()=>imob.set_active(wm)}>show</button>
      </div>
   </div>`
  )


return html`
<form onsubmit=${handle_submit}>
  <input placeholder="${temp.name}" onchange=${show_res} oninput="${e=>imob.inf=e.target.value}"  />
</form>
  <h4>${imob.inf}</h4>
  ${wm_list}
  ${big_item}
`
}

export default observer(I_search);
//export {ch_filter}
