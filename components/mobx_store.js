//import { html, render } from 'https://unpkg.com/htm/preact/index.mjs?module';
import { html, Component, render } from 'https://unpkg.com/htm/preact/index.mjs?module';
import { decorate, observable, computed, action, autorun, toJS } from '../modules/mobx.module.js';

var item="dress"

var imob={
  inf: item,
  main_id: null,
  message: '',
  type: item,
  data: [
  //    { name: 'Vii', color: 'black', category: 'top', active: true, id: 1, img_id: 'md_0'},
    { name: 'Maud', color: 'black', category: 'top', active: false, id: 1, img_id: 'md_1'},
    { name: 'Ruth', color: 'black', category: 'mini dress', active: false, id: 2, img_id: 'md_2'},
    { name: 'Muit', color: 'black', category: 'dress', active: false, id: 3, img_id: 'md_3'},
    { name: 'Iwie', color: 'black', category: 'dress', active: false, id: 4, img_id: 'md_4'},
    { name: 'Iiya', color: 'black', category: 'dress', active: false, id: 5, img_id: 'md_5'},
//    { name: 'Maud', color: 'black', category: 'top', active: false, id: 1, img_id: 'md_6'},
    { name: 'Ruth', color: 'black', category: 'skirt', active: false, id: 2, img_id: 'md_7'},
    { name: 'Muit', color: 'black', category: 'top', active: false, id: 3, img_id: 'md_8'},
    { name: 'Iwie', color: 'black', category: 'knitwear', active: false, id: 4, img_id: 'md_9'},
    { name: 'Iiya', color: 'black', category: 'dress', active: false, id: 5, img_id: 'md_10'},
    { name: 'Maud', color: 'black', category: 'top', active: false, id: 1, img_id: 'md_11'},
    { name: 'Ruth', color: 'black', category: 'top', active: false, id: 2, img_id: 'md_12'},
    { name: 'Muit', color: 'black', category: 'dress', active: false, id: 3, img_id: 'md_13'},
    { name: 'Iwie', color: 'black', category: 'top', active: false, id: 4, img_id: 'md_14'},
    { name: 'Maud', color: 'black', category: 'dress', active: false, id: 1, img_id: 'md_15'},
    { name: 'Ruth', color: 'black', category: 'skirt', active: false, id: 2, img_id: 'md_16'}
  ],
  it_list: [
    {name: "dress"},{name:"mini dress"},{name: "top"},{name: "skirt"},{name: "knitwear"}
  ],
  set_active: w=>{
    imob.data.forEach(wm=>wm.active=false)
    w.active=true;
    console.log(w.id);
  }
  /*,
  del_w: id=>{
    imob.data=imob.data.filter(wm=>{
      return wm.id != id
    });
    console.log(imob.data.map(i=>i.name));
  }*/
}

decorate(imob, {
    inf: observable,
    type: observable,
    message: observable,
    data: observable,
    set_active: action,
//    ch_store: action,
//    del_w: action
})


export default imob;
