import {listParseJSON, groupParseJSON} from './list-factory.js';
import storageMod from './local-storage-handle.js';

const listMod = (() => {
  'use strict';
  const GROUP = "group";
  const LIST = "list";
  let _listArr = [];
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

  // Public Method

  const simpanList = () =>{
    _updateStorage(_listArr, LIST);
  }

  const simpanGroup = () =>{
    _updateStorage(_groupArr, GROUP);
  }

  const populateList = () =>{
    if(_checkStorage(LIST, GROUP)){
      const list = storageMod.getStorage(LIST);
      const group = storageMod.getStorage(GROUP);
      if(list !== null && list !== ""){
        const listObj = JSON.parse(list);
        listObj.forEach(value => {
          _listArr.push(listParseJSON(value));
        });
      }
      if(group !== null && group !== ""){  
        const groupObj = JSON.parse(group);
        groupObj.forEach(value => {
          _groupArr.push(groupParseJSON(value));
        })
      }
    }
  }
  
  const tambahList = _listFact => {
    _listArr.push(_listFact);
  }

  const editList = (index, _updateList) => {
    _listArr[index] = _updateList;
  }

  const hapusList = (index) => {
    _listArr.splice(index, 1);
  }

  const hapusSemuaList = () => {
    _listArr.length = 0;
  }

  const getList = () => _listArr;
  
  const tambahGroup = _groupFact => {
    _groupArr.push(_groupFact);
  }

  const editGroup = (index, _groupFact) => {
    _groupArr[index] = _groupFact;
  }

  const hapusGroup = (index) => {
    _groupArr.splice(index, 1);
  }

  const hapusSemuaGroup = () => {
    _groupArr.length = 0;
  }

  const getGroup = () => _groupArr;

  return {hapusSemuaList, simpanList, simpanGroup, populateList, getList, hapusList, editList, tambahList,
          tambahGroup, editGroup, hapusGroup, hapusSemuaGroup, getGroup};
})();

export default listMod;