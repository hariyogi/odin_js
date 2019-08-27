/**
 * Objeck Untuk Menyimpan List
 * @param {string} judul judul list
 * @param {string} desk deskripsi list
 * @param {Date} dline Tanggal death line
 * @param {number} prioriti Prioritas
 * @param {string} pesan Pesan
 * @param {string[]} checklist Checklist 
 * @param {groupFact[]} group groupFact[]
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
  const setJudul = _judul => {
    judul = _judul;
  } 
  const setDesk = _desk => {
    desk = _desk;
  } 
  const setDline = _dline => {
    dline = _dline;
  } 
  const setPrioriti = _prio => {
    prioriti = _prio;
  } 
  const setPesan = _pesan => {
    pesan = _pesan;
  } 
  const setChecklist = _clist => {
    checklist = _clist;
  }
  const setGroup = _group => {
    group = _group;
  }
  const toString = () => `${judul} ${desk} ${dline} ${prioriti} ${pesan} ${checklist}`;
  const getAllToObj = () => {
    return {judul, desk, dline, prioriti, pesan, checklist, group};
  };
  return {getJudul, getDesk, getDline, getPrioriti, getPesan,
      getChecklist, setJudul, setDesk, setDline, setPrioriti, setPesan,
      setChecklist, toString, getAllToObj, setGroup, getGroup}
}

const groupFact = nama => {
  'use strict';
  const getNama = () => nama;
  const setNama = _nama => {nama = _nama;}
  const getAllToObj = () => {
    return {nama};
  };
  const toString = () => `${nama}`;
  
  return {getNama, setNama, getAllToObj, toString};
}

const listParseJSON = obj => {
  return listFact(obj.judul, obj.desk, obj.dline, obj.prioriti, obj.pesan, obj.checklist, obj.group);
}

const groupParseJSON = obj => {
  return groupFact(obj.nama);
}

export {listFact, listParseJSON, groupFact, groupParseJSON};