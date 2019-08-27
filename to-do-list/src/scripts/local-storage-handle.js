const storageMod = (() => {
  'use strict';
  /**
   * Check apakah web mendukung local storage <br>
   * Sumber : https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
   * @returns true jika benar
   */
  const _isCompatible = type => {
    var storage;
    try {
      storage = window[type];
      var x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch(e) {
      return e instanceof DOMException && (
        // everything except Firefox
        e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        // acknowledge QuotaExceededError only if there's something already stored
        (storage && storage.length !== 0);
    }
  };

  /**
   * Check ketersedian storage
   * @returns false jika tidak tersedia
   */
  const isStorageAda = nama => {
    return (_isCompatible && localStorage.getItem(nama) !== null) ? true : false;
  }

  /**
   * Membuat storage baru
   * @returns false jika nama sudah ada 
   */ 
  const buatStorageBaru = nama => {
    if(!isStorageAda(nama)){
      localStorage.setItem(nama, "");
    }
  }

  /**
   * Mengedit / update storage yang sudah ada
   * @returns false jika nama tidak ada
   */
  const updateStorage = (nama, isi) => {
    if(isStorageAda(nama)){
      localStorage.setItem(nama, isi);
    }
  }

  /**
   * Mengambil local storage sesuai nama
   * @param {string} nama
   * @returns null jika nama storage tidak ada 
   */
  const getStorage = nama => {
    return (isStorageAda(nama)) ? localStorage.getItem(nama) : null;
  }

  /**
   * Menghapus storage menurut nama 
   */
  const delStorage = nama =>{
    localStorage.removeItem(nama);
  };

  /**
   * Menghapus semua storage
   */
  const clearStorage = () => {
    localStorage.clear();
  }
  
  return {isStorageAda, buatStorageBaru, updateStorage, getStorage, delStorage, clearStorage};
  
})();

export default storageMod;
