// Bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import {listFact, groupFact} from './scripts/list-factory.js';
import listMod from './scripts/list-controler.js';
import domMod from './scripts/dom-handle.js';

const btnTambahGroup = document.getElementById("tambah_group");
const groupCont = document.getElementById("group_cont");
//const btnTambahList = document.getElementById("tambah_note");

listMod.populateList();

btnTambahGroup.addEventListener("click", e =>{
  const nama = document.getElementById("nama-group").value;
  if(nama !== null && nama !== ""){
    const group = groupFact(nama);
    listMod.tambahGroup(group);
    listMod.simpanGroup();
    domMod.tambahList(group.getAllToObj(), groupCont);
  }
});

function getObject(array) {
  let temp = [];
  array.forEach(value => {
    temp.push(value.getAllToObj());
  });
  return temp;
}

domMod.populateList(getObject(listMod.getGroup()), groupCont);


