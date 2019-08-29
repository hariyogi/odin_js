/**
 * Objeck Untuk Menyimpan To Do List
 * @version 0.1.0
 */
const listFact = (judul, desk, dline, prioriti, pesan, checklist, group) => {
  'use strict';
  // Getter
  const getJudul = () => judul;
  const getDesk = () => desk;
  const getDline = () => dline;
  const getPrioriti = () => prioriti;
  const getPesan = () => pesan;
  const getChecklist = () => checklist;
  const getGroup = () => group;
  // Setter
  const setJudul = _judul => {judul = _judul;} 
  const setDesk = _desk => {desk = _desk;} 
  const setDline = _dline => {dline = _dline;} 
  const setPrioriti = _prio => {prioriti = _prio;} 
  const setPesan = _pesan => {pesan = _pesan;} 
  const setChecklist = _clist => {checklist = _clist;}
  const tambahChecklist = _clist => {checklist.push(_clist);}
  const setGroup = _group => {group = _group;}
  const toString = () => `${judul} ${desk} ${dline} ${prioriti} ${pesan} ${checklist}`;
  const getAllToObj = () => {return {judul, desk, dline, prioriti, pesan, checklist, group};};
  return {getJudul, getDesk, getDline, getPrioriti, getPesan,
      getChecklist, setJudul, setDesk, setDline, setPrioriti, setPesan,
      setChecklist, toString, getAllToObj, setGroup, getGroup, tambahChecklist, }
}

/**
 * Objek untuk menyimpan Group List
 * @version 0.2.0
 */
const groupFact = (nama, noteList) => {
  'use strict';
  // Getter Setter
  const getNama = () => nama;
  const setNama = _nama => {nama = _nama;}
  const getNoteList = () => noteList;
  const setNoteList = arrNoteList =>{noteList = arrNoteList;}
  const getNote = index => noteList[index];
  const setNote = (index, noteList) => {noteList[index] = noteList};
  const tambahNote = list => {noteList.push(list);}
  const hapusNote = index => {noteList.splice(index, 1)};
  const kosongkanNoteList = () => {noteList.length = 0;}
  const getAllToObj = () => {return {nama, noteList};};
  const toString = () => `${nama}`;
  return {getNama, setNama, setNoteList, getNoteList, tambahNote, 
          kosongkanNoteList,  getAllToObj, toString, getNote, 
          setNote, hapusNote};
}

/**
 * Module Helper Untuk list-factory.js
 * @version 0.2.0
 */
const listUtils = (() =>{
  /**
   * Parse JSON kedalam listFact()
   * @param obj listFact().getAllToObj()
   * @returns listFact() Objek 
   */
  const listParseJSON = obj => {
    return listFact(obj.judul, obj.desk, obj.dline, obj.prioriti, obj.pesan, obj.checklist, obj.group);
  }
  
  /**
   * Parse JSON kedalam groupFact()
   * @param {*} obj groupFact().getAllToObj()
   * @returns groupFact() objek
   */
  const groupParseJSON = obj => {
    return groupFact(obj.nama, obj.noteList);
  }

  /**
   * Mengabil variabel pada objek factory function
   * @param {*} array kumpulan Objek
   * @returns Array variable Objek
   */
  const getObject = array => {
    let temp = [];
    array.forEach(value => {
      temp.push(value.getAllToObj());
    });
    return temp;
  }
  return {listParseJSON, groupParseJSON, getObject}
})();


export {listFact, groupFact, listUtils};