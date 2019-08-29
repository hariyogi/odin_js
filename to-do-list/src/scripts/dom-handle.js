import {listUtils} from './list-factory.js';
import listMod from './list-controler.js';

const domMod = (() =>{
  'use strict';

  const _buatListGroupItem = () => {
    const li = document.createElement("li");
    return li;
  }

  const _buatButtonGroup = () => {
    const btnGroup = document.createElement("div");
    return btnGroup;
  }

  const _buatButton = content => {
    const button = document.createElement("button");
    button.textContent = content;
    return button;
  }

  const _modalOpen = id => {
    document.body.classList.add("modal-open");
    id.classList.add("show");
    id.setAttribute("style", "display: block;");
    id.removeAttribute("aria-hidden");
    id.setAttribute("aria-modal", true);
  } 

  // Public Mehtod

  const toggleActive = (arrElementList, index) => {
    arrElementList.forEach((value,eindex) => {
      value.classList.toggle("active",eindex === index);
    });
  }

  const hapusSemuaChild = element => {
    while(element.firstChild){
      element.removeChild(element.firstChild);
    }
  }
  
  const getListGroup = array => {
    let arryListGroup = []
    array.forEach((value) => {
      const li = _buatListGroupItem();
      const judul = document.createElement("h3");
      judul.textContent = value.nama;
      li.append(judul);
      arryListGroup.push(li);
    });
    return arryListGroup;
  }
  
  const appendChild = (arryChild, contiainer) => {
    arryChild.forEach(value =>{
      contiainer.appendChild(value);
    });
  }

  return {getListGroup, appendChild, hapusSemuaChild, toggleActive};
})();

export default domMod;