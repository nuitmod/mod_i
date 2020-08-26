import { html, Component, render } from 'https://unpkg.com/htm/preact/index.mjs?module';
import { observer } from '../modules/mobx_preact.module.js';

var Item_menu=()=>html`
<nav class="mobile">
        <ul class="mobile__items">
        <li><a id="dress" href="#">Dress</a></li>
        <li><a id="tops" href="#">Tops</a></li>
        <li><a id="skirts" href="#">Skirts</a></li>
        </ul>
      </nav>
`;
/*
var menu_2=()=>html`
<div>
  <div id="burg_1">
    <span class="bar_1" id=""></span>
  </div>
  <div class="mob2">
    <nav class="mobile2">
      <ul class="mobile_items2">
          <li><a href="https://nuitmod.github.io/pre_iproj">pre_iproj</a></li>
          <li><a href="https://nuitmod.github.io/uwsgi_kali/i_uwsgi">i_uwsgi</a></li>
          <li><a href="https://nuitmod.github.io/nata_pwa_">nata</a></li>
          <li><a href="https://nuitmod.github.io/vi_pwa">vi_pwa</a></li>
          <li><a href="https://nuitmod.github.io/io_proj">io_proj</a></li>
          <li><a href="https://nuitmod.github.io/mod_pwa">in browser</a></li>
          <li><a href="https://yoox.com">yoox.com</a></li>
          <li>
            <a href="#home"><img id="b_main_on" src="./icons/visibility-24px.svg"></a>
            <a href="#rend"><img id="b_main_off" src="./icons/visibility_off-24px.svg"></a>
          </li>
      </ul>
    </nav>
  </div>
</div>`;
*/

//export {menu_2};
export default observer(Item_menu);
