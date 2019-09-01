import {listUtils, groupFact, listFact} from './list-factory.js';
import listMod from './list-controler.js';

const domMod = (() =>{
  'use strict';

  let _groupCont = null;
  let _listCont = null;
  let _judulGroup = null;

  /***********************************
  * Helper
  ************************************/

  const _buatListElement = () => {
    const li = document.createElement("li");
    return li;
  }

  const _buatGroupButtonELement = () => {
    const btnGroup = document.createElement("div");
    btnGroup.classList.add("btn-group");
    return btnGroup;
  }

  const _buatButtonElement = content => {
    const button = document.createElement("button");
    button.textContent = content;
    return button;
  }

  const _toggleActiveClass = (arrElementList, index) => {
    arrElementList.forEach((value,eindex) => {
      value.classList.toggle("active",eindex === index);
    });
  }

  const _hapusSemuaChild = element => {
    while(element.firstChild){
      element.removeChild(element.firstChild);
    }
  }

  const _tambahBanyakChild = (arryChild, contiainer) => {
    arryChild.forEach(value =>{
      contiainer.appendChild(value);
    });
  }

  /***********************************
  * Modal
  ************************************/

  /**
   * Untuk membuat Modal (tampilan pop out)
   * @param {element} container Tempat Modal Muncul
   * @param {string} idModal atribut 'id'
   * @param {element} header Element header modal
   * @param {element} body Element main body modal
   * @param {element} footer Element footer modal
   */
  const _buatModal = (container, idModal, header, body, footer) => {
    const modal = document.createElement("div");
    const modalContent = document.createElement("div");
    modal.classList.add("modal");
    modalContent.classList.add("modal-content");
    modal.setAttribute("id", idModal);
    modalContent.append(header, body, footer);
    modal.appendChild(modalContent);
    modal.addEventListener("click", e => {
      let target = e.target;
      do{
        if(target === modalContent){
          return;
        }
        target = target.parentNode;
      }while(target);
      container.removeChild(modal);
    });
    return modal;
  }

  /**
   * Header untuk modal
   * @param {string} judul Judul modal
   * @param {element} container Tempat modal muncul
   */
  const _buatModalHeader = (judul, container) => {
    const modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");
    const h2 = document.createElement("h2");
    const close = document.createElement("i");
    close.classList.add("modal-close");
    h2.textContent = judul;
    close.textContent = "\u00D7"
    close.addEventListener("click", () => {
      const modal = document.querySelector(".modal");
      container.removeChild(modal);
    })
    modalHeader.append(h2, close);
    return modalHeader;
  }

  /**
   * Body untuk modal
   * @param  {...any} isi Kumpulan element yang terdapat dalam body
   */
  const _buatModalBody = (...isi) => {
    const modalBody = document.createElement("div");
    modalBody.classList.add("modal-body");
    isi.forEach(value =>{
      modalBody.appendChild(value);
    });
    return modalBody;
  }

  /**
   * Footer untuk modal
   * @param  {...any} isi Kumpulan element yang terdapat dalam footer
   */
  const _buatModalFooter = (...isi) => {
    const modalFooter = document.createElement("div");
    modalFooter.classList.add("modal-footer");
    isi.forEach(value =>{
      modalFooter.appendChild(value);
    });
    return modalFooter;
  }

  /***********************************
  * Form
  ************************************/

  const _buatForm = (...arrInputGroup) => {
    const form = document.createElement("form");
    arrInputGroup.forEach(value => {
      form.appendChild(value);
    });
    return form;
  }

  const _buatInputGroup = (judul, _buatInput) => {
    const div = document.createElement("div");
    const label = document.createElement("label");
    div.classList.add("input-group");
    label.textContent = judul;
    label.setAttribute("for", _buatInput.getAttribute("id"));
    div.append(label, _buatInput)
    return div;
  }

  const _buatInput = (type, id, isRequired, value) => {
    const input = document.createElement("input");
    input.setAttribute("type", type);
    input.setAttribute("name", id);
    input.setAttribute("id", id);
    input.setAttribute("value", value);
    if(isRequired){
      input.setAttribute("required", "")
    }
    return input;
  }

  const _buatSelect = (...arrValue) => {
    const select = document.createElement("select");
    arrValue.forEach(value => {
      const option = document.createElement("option");
      option.setAttribute("value", value[0]);
      option.textContent = value[1];
      select.appendChild(option);
    });
    return select;
  }

  /***********************************
  * Public Function
  ************************************/

  /**
   * Menampilkan modal untuk menyimpan group baru
   * @param {div} container Tempat modal muncul
   */
  const buatModalGroupAdd = container => {
    const namaInput = _buatInput("text", "nama-group", true, "");
    const namaGroup = _buatInputGroup("Nama", namaInput);
    const form = _buatForm(namaGroup);
    const simpanBtn = _buatButtonElement("Simpan");
    simpanBtn.addEventListener("click", () => {
      const nama = namaInput.value;
      if(nama !== null && nama !== ""){
        listMod.tambahGroup(groupFact(nama, []));
        populateGroup();
      }
    })
    const header = _buatModalHeader("Tambah Group", container);
    const modalBody = _buatModalBody(form);
    const footer = _buatModalFooter(simpanBtn);
    const modal = _buatModal(container, "modal-group", header, modalBody, footer);
    container.append(modal);
  }
  /**
   * Menampilkan modal untuk mengedit group yang sudah ada
   * @param {div} container Tempat modal muncul
   * @param {number} index Posisi group
   */
  const buatModalGroupEdit = (container, index) => {
    const group = listMod.getCrntGroup().groupObj;
    if(group === null) return;
    const namaInput = _buatInput("text", "nama-group", true, group.getNama());
    const namaGroup = _buatInputGroup("Nama", namaInput);
    const form = _buatForm(namaGroup);
    const simpanBtn = _buatButtonElement("Simpan");
    simpanBtn.addEventListener("click", () => {
      const nama = namaInput.value;
      if(nama !== null && nama !== ""){
        group.setNama(nama);
        listMod.editGroup(index, group);
        populateGroup();
      }
    })
    const header = _buatModalHeader("Edit Group", container);
    const modalBody = _buatModalBody(form);
    const footer = _buatModalFooter(simpanBtn);
    const modal = _buatModal(container, "modal-group", header, modalBody, footer);
    container.append(modal);
  }

  const buatModalNoteBaru = (container, group) => {
    const judul = _buatInput("text", "judul-note", true, "");
    const date = _buatInput("date", "date-note", true, "");
    const desk = _buatInput("text", "desk-note", false, "");
    const prio = _buatSelect([2, "Tinggi"], [1, "Sedang"], [0, "Rendah"]);
    const pesan = _buatInput("text", "pesan-note", false, "");
    const check = _buatInput("text", "check-note", false, "");
    const judulGroup = _buatInputGroup("Judul", judul);
    const dateGroup = _buatInputGroup("Tanggal", date);
    const deskGroup = _buatInputGroup("Desk", desk);
    const prioGroup = _buatInputGroup("Prio", prio);
    const pesanGroup = _buatInputGroup("Pesan", pesan);
    const checkGroup = _buatInputGroup("Check", check);
    const form = _buatForm(judulGroup, dateGroup, deskGroup, prioGroup, pesanGroup, checkGroup);
    const simpan = _buatButtonElement("Simpan");
    simpan.addEventListener("click", () => {
      if(validasiForm(form)){
        listMod.tambahList(listFact(
          judul.value, desk.value, date.value, prio.value,
          pesan.value, check.value, group.getNama()
        ));
        populateList();
      }
    });
    const header = _buatModalHeader("Buat Note Baru", container);
    const body = _buatModalBody(form);
    const footer = _buatModalFooter(simpan);
    const modal = _buatModal(container, "note-modal", header, body, footer);
    container.append(modal);
  }

  const _buatModalNoteEdit = (container, index) => {
    const note = listMod.getCrntGroup().groupObj.getNote(index);
    if(note === null || note === undefined) return;
    const judul = _buatInput("text", "judul-note", true, note.getJudul());
    const date = _buatInput("date", "date-note", true, note.getDline());
    const desk = _buatInput("text", "desk-note", false, note.getDesk());
    const prio = _buatSelect([2, "Tinggi"], [1, "Sedang"], [0, "Rendah"]);
    const pesan = _buatInput("text", "pesan-note", false, note.getPesan());
    const check = _buatInput("text", "check-note", false, note.getChecklist());
    const judulGroup = _buatInputGroup("Judul", judul);
    const dateGroup = _buatInputGroup("Tanggal", date);
    const deskGroup = _buatInputGroup("Desk", desk);
    const prioGroup = _buatInputGroup("Prio", prio);
    const pesanGroup = _buatInputGroup("Pesan", pesan);
    const checkGroup = _buatInputGroup("Check", check);
    const form = _buatForm(judulGroup, dateGroup, deskGroup, prioGroup, pesanGroup, checkGroup);
    const simpan = _buatButtonElement("Simpan");
    simpan.addEventListener("click", () => {
      if(validasiForm(form)){
        listMod.editList(index, listFact(
          judul.value, desk.value, date.value, prio.value,
          pesan.value, check.value, note.getGroup()
        ));
        populateList();
      }
    });
    const header = _buatModalHeader("Edit Note", container);
    const body = _buatModalBody(form);
    const footer = _buatModalFooter(simpan);
    const modal = _buatModal(container, "note-modal", header, body, footer);
    container.append(modal);
  }

  const populateList = () => {
    _hapusSemuaChild(_listCont);
    let arrElementList = domMod.getListNote(listUtils.getObject(listMod.getCrntGroup().groupObj.getNoteList()));
    _tambahBanyakChild(arrElementList, _listCont);
  }

  const populateGroup = () => {
    _hapusSemuaChild(_groupCont);
    let arrElementGroup = domMod.getListGroup(listUtils.getObject(listMod.getGroup()));
    arrElementGroup.forEach((value, index) => {
      value.addEventListener("click", () =>{
        listMod.setCrntGroup(index);
        _toggleActiveClass(arrElementGroup, index);
        _judulGroup.textContent = listMod.getCrntGroup().groupObj.getNama();
        populateList();
      });
    });
    _tambahBanyakChild(arrElementGroup, _groupCont)
  }
  
  const getListGroup = array => {
    let arryListGroup = []
    array.forEach(value => {
      const li = _buatListElement();
      const judul = document.createElement("h3");
      judul.textContent = value.nama;
      li.append(judul);
      arryListGroup.push(li);
    });
    return arryListGroup;
  }

  const getListNote = array => {
    let arrayListNote = [];
    array.forEach((e, index) => {
      const li = _buatListElement();
      const btnGroup = _buatGroupButtonELement();
      const judul = document.createElement("h3");    
      judul.textContent = e.judul;
      const hapus = _buatButtonElement("hapus");
      const edit = _buatButtonElement("Edit");
      hapus.addEventListener("click", () => {
        listMod.hapusList(index);
        populateList();
      })
      edit.addEventListener("click", () =>{
        _buatModalNoteEdit(document.body, index);
        populateList();
      });
      btnGroup.append(edit, hapus);
      li.append(judul, btnGroup);
      arrayListNote.push(li)
    })
    return arrayListNote;
  }
  
  const tambahContainer = (group, list, judulGroup) => {
    _groupCont = group;
    _listCont = list;
    _judulGroup = judulGroup;
  }

  const validasiForm = form => {
    const elements = form.elements;
    const lng = elements.length;
    for(let i = 0; i < lng; i++){
      if(!elements[i].checkValidity()){
        alert(`Tolong isi form kolom ${i + 1}`);
        return false;
      }
    }
    return true;
  }

  return {getListGroup, getListNote, tambahContainer,
          populateGroup, populateList, validasiForm,
          buatModalGroupAdd, buatModalGroupEdit, buatModalNoteBaru, };
})();

export default domMod;
