import {home, contact, menuCard} from "./content";

const init = (() =>{
    "use strict"
    ////// VARIABLE ///////
    const HEADER = "header";
    const NAV = "nav";
    const ISI = "isi";
    let headerLayout = null;
    let navLayout = null;
    let isiLayout = null;

    ////// PRIVATE METHOD //////
    const _createHeader = (judul, deskripsi) => {
        const header = document.createElement("div");
        header.setAttribute("id", HEADER);
        const judulLayout = document.createElement("h1");
        const deskripsiLayout = document.createElement("p");
        judulLayout.textContent = judul;
        deskripsiLayout.textContent = deskripsi;
        header.append(judulLayout, deskripsiLayout);
        return header;
    };

    const _createNav = (listNav, content) =>{
        if(listNav.length !== content.length) throw "jumlah nav harus sama dengan content";
        const ul = document.createElement("ul");
        ul.setAttribute("id", NAV);
        listNav.forEach((element, index) => {
            const li = document.createElement("li");
            li.textContent = element;
            li.addEventListener("click", e =>{
                _resetElement(isiLayout);
                _setIsi(content[index]);
                _gantiNav(index);
            });
            ul.appendChild(li);
        });
        _setIsi(content[0]);
        _gantiNav(0);
        return ul;
    }

    const _createIsi = () =>{
        const div = document.createElement("div");
        div.setAttribute("id", ISI);
        return div;
    }

    const _resetElement = element =>{
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    };

    const _setIsi = isi =>{
        if(isiLayout !== null){
            isi.forEach(e =>{
                isiLayout.append(e);
            });
        }
    }

    const _gantiNav = pos =>{
        let child = document.querySelectorAll("ul#nav li");
        child.forEach((element, index) => {
            if(index === pos){
                element.classList.add("selected");
            }else{
                if(element.classList.contains("selected")){
                    element.classList.remove("selected");
                }
            }
        });
    }
    
    ////// PUBLIC METHOD //////
    const createMainLayout = div =>{
        if(div.tagName !== "DIV") throw "Element harus Div";
        headerLayout = _createHeader("HEAVEN CAKE", "Ini adalah deskripsi");
        isiLayout = _createIsi();
        navLayout = _createNav(["HOME", "MENU", "CONTRACT"], [home, menuCard, contact]);
        div.append(headerLayout, navLayout, isiLayout);
    };

    const test = () => "init.js berhasil di load";

    return {createMainLayout, test};
    
})();

export default init