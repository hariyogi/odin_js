const domMod = (() =>{
  'use strict';
  const populateList = (array, ulContainer) => {
    array.forEach(value => {
      tambahList(value, ulContainer);
    });
  }

  const tambahList = (obj, ulContainer) => {
    const li = document.createElement("li");
      li.classList.add("list-group-item");
      for(let key in obj){
        const p = document.createElement("p");
        p.textContent = obj[key];
        li.appendChild(p); 
      }
      ulContainer.appendChild(li);
  }

  return {populateList, tambahList};
})();

export default domMod;