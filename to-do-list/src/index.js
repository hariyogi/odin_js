// Bootstrap
import './styles/reset.css';
import './styles/main.css';
import listMod from './scripts/list-controler.js';
import domMod from './scripts/dom-handle.js';

// Group
const groupCont = document.getElementById("group-cont");
const bukaModalGroup = document.getElementById("op-mdl-group");

// Note
const judulGroup = document.getElementById("judul-group");
const bukaModalNote = document.getElementById("op-mdl-note");
const editNamaGroup = document.getElementById("edit-nama-group");
const hapusGroup = document.getElementById("hapus-group");
const listCont = document.getElementById("list-cont");

const eventHandler = () => {

  bukaModalGroup.addEventListener("click", () =>{
    domMod.buatModalGroupAdd(document.body);
  });

  editNamaGroup.addEventListener("click", () => {
    domMod.buatModalGroupEdit(document.body, listMod.getCrntGroup().index);
  })

  bukaModalNote.addEventListener("click", () => {
    if(listMod.getCrntGroup().groupObj !== null 
      && listMod.getCrntGroup().groupObj !== undefined) {
      domMod.buatModalNoteBaru(document.body, listMod.getCrntGroup().groupObj);
    }else alert("harus memilih group dulu");
  });

  hapusGroup.addEventListener("click", () => {
    listMod.hapusGroup();
    domMod.populateGroup();
    domMod.populateList();
  });
}

function init(){
  listMod.initList();
  domMod.tambahContainer(groupCont, listCont, judulGroup);
  domMod.populateGroup();
  eventHandler();
}

init();

