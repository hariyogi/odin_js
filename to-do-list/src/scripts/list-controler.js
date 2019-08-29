import {listUtils} from './list-factory.js';
import storageMod from './local-storage-handle.js';

const listMod = (() => {
  'use strict';
  /*
    CONSTANST FIELD
  */
  const GROUP = "group";
  let _crntGroup = {"groupObj":null, "index":-1};
  let _crntListNote = [];
  let _groupArr = [];

  // Private Method

  const _updateStorage = (array, nama) => {
    let temp = [];
    array.forEach(value => {
      temp.push(value.getAllToObj());
    });
    storageMod.updateStorage(nama, JSON.stringify(temp));
  }

  const _checkStorage = (...nama) => {
    try{
      nama.forEach(value => {
        if(!storageMod.isStorageAda(value)){
          storageMod.buatStorageBaru(value);
        }
      });
      return true;
    }catch (e){
      console.log(e);
      return false;
    }    
  }

  const _setCrntListNote = listNote =>{
    listNote.forEach(value => {
      _crntListNote.push(value);
    });
  }

  const _resetCrntGroup = () => {
    if(_groupArr.length > 0){
      _crntGroup.groupObj = _crntGroup[0];
      _crntGroup.index = 0;
    }else{
      _crntGroup.groupObj = null;
      _crntGroup.index = -1;
    }
    
  }

  // Public Method

  const simpanGroup = () =>{
    _updateStorage(_groupArr, GROUP);
  }

  const initList = () =>{
    if(_checkStorage(GROUP)){
      const group = storageMod.getStorage(GROUP);
      if(group !== null && group !== ""){  
        const groupObj = JSON.parse(group);
        groupObj.forEach(value => {
          _groupArr.push(listUtils.groupParseJSON(value));
        })
      }
    }
  }

  const setCrntGroup = (index) =>{
    _crntGroup.groupObj = _groupArr[index];
    _crntGroup.index = index;
    _setCrntListNote(_crntGroup.groupObj.getNoteList());
  }
  
  const tambahList = _listFact => {
    _crntGroup.groupObj.tambahNoteList(_listFact);
    simpanGroup();
  }

  const editList = (index, _updateList) => {
    _crntGroup.groupObj.setNote(index, _updateList);
    simpanGroup();
  }

  const hapusList = (index) => {
    _crntGroup.groupObj.hapusNote(index);
    simpanGroup();
  }

  const hapusSemuaList = () => {
    _crntGroup.groupObj.kosongkanNoteList();
    simpanGroup();
  }

  const tambahGroup = _groupFact => {
    _groupArr.push(_groupFact);
    simpanGroup();
  }

  const editGroup = (index, _groupFact) => {
    _groupArr[index] = _groupFact;
    simpanGroup();
  }

  const hapusGroup = () => {
    if(_crntGroup.groupObj !== null && _crntGroup.index > -1) {
      _groupArr.splice(_crntGroup.index, 1);
      simpanGroup();
      _resetCrntGroup();
    }
  }

  const hapusSemuaGroup = () => {
    _groupArr.length = 0;
    simpanGroup();
  }

  const getGroup = () => _groupArr;
  const getGroupLng = () => _groupArr.length - 1;
  const getCrntGroup = () => _crntGroup;
  const getCrntListNote = () => _crntListNote;

  return {hapusSemuaList, simpanGroup, initList, hapusList,
          editList, tambahList, tambahGroup, editGroup, hapusGroup, hapusSemuaGroup, 
          getGroup, getGroupLng, setCrntGroup, getCrntGroup, getCrntListNote};
})();

export default listMod;