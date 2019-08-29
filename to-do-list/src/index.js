// Bootstrap
import './styles/reset.css';
import './styles/main.css';
import {listFact, groupFact, listUtils} from './scripts/list-factory.js';
import listMod from './scripts/list-controler.js';
import domMod from './scripts/dom-handle.js';

// Group
const saveGroupForm = document.getElementById("save-group-form");
const groupCont = document.getElementById("group-cont");
const bukaModalGroup = document.getElementById("op-mdl-group");
const groupModal = document.getElementById("group-modal");
// Note
const judulGroup = document.getElementById("judul-group");
const bukaModalNote = document.getElementById("op-mdl-note");
const noteModal = document.getElementById("note-modal");
const tambahNote = document.getElementById("tambah-note");
const editNamaGroup = document.getElementById("edit-nama-group");
const hapusGroup = document.getElementById("hapus-group");

const refreshJudulGroup = () => {
  judulGroup.textContent = listMod.getCrntGroup().groupObj.getNama();
}

const populateGroup = () => {
  domMod.hapusSemuaChild(groupCont);
  let arrElementGroup = domMod.getListGroup(listUtils.getObject(listMod.getGroup()));
  arrElementGroup.forEach((value, index) => {
    value.addEventListener("click", e =>{
      listMod.setCrntGroup(index);
      domMod.toggleActive(arrElementGroup, index);
      refreshJudulGroup();
    });
  });
  domMod.appendChild(arrElementGroup, groupCont)
}

const eventHandler = () => {

  const closeModal = () => {
    const modal = document.querySelectorAll(".modal");
    modal.forEach(value => {
      value.style.display = "none";
    })
  }

  bukaModalGroup.addEventListener("click", e =>{
    groupModal.style.display = "flex";
    const close = groupModal.querySelector(".modal-close");
    close.addEventListener("click", closeModal);
  });

  bukaModalNote.addEventListener("click", e => {
    noteModal.style.display = "flex";
    const close = noteModal.querySelector(".modal-close");
    close.addEventListener("click", closeModal);
  });

  saveGroupForm.addEventListener("click", e =>{
    const namaGroup = document.getElementById("nama-group").value;
    if(namaGroup !== null && namaGroup !== ""){
      listMod.tambahGroup(groupFact(namaGroup, []));
      populateGroup();
    }
  });

  hapusGroup.addEventListener("click", e => {
    listMod.hapusGroup();
    populateGroup();
  });
}

function init(){
  listMod.initList();
  populateGroup();
  eventHandler();
}

init();

