const listFact = (judul, desk, dline, prioriti, pesan, checklist) => {
  // Getter
  const getJudul = () => judul;
  const getDesk = () => desk;
  const getDline = () => dline;
  const getPrioriti = () => prioriti;
  const getPesan = () => pesan;
  const getChecklist = () => checklist;
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

  const toString = () => `${judul} ${desk} ${dline} ${prioriti} ${pesan} ${checklist}`;
  
  return {getJudul, getDesk, getDline, getPrioriti, getPesan,
      getChecklist, setJudul, setDesk, setDline, setPrioriti, setPesan, setChecklist, toString}
}

export default listFact;