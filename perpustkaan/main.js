let myLibary = [];

const judul = document.getElementById("judul");
const pengarang = document.getElementById("pengarang");
const halaman = document.getElementById("halaman");
const simpan = document.getElementById("simpan");
const read = document.getElementById("baca");
const data = document.getElementById("data");

simpan.addEventListener("click", () =>{
    addBook();
    render();
});

function Book (judul, pengarang, halaman, isread){
    this.judul = judul;
    this.pengarang = pengarang;
    this.halaman = halaman;
    this.isRead = isread;
}

Book.prototype.isBaca = function(){
    if(this.isRead === false){
        this.isRead = true;
    }else{
        this.isRead = false;
    }
};

function addBook (){
    myLibary.push(new Book(
        judul.value,
        pengarang.value,
        halaman.value,
        false
        ));
}

function render(){
    resetData();
    myLibary.forEach((array, index) =>{
        const p = document.createElement("p");
        const del = document.createElement("a");
        p.textContent = `${array.judul}, ${array.pengarang}, ${array.halaman}, ${array.isRead} `;
        del.textContent = "Hapus";
        del.setAttribute("href", "#");
        del.addEventListener("click", () =>{
            delData(index);
            render();
        });
        p.appendChild(del);
        data.appendChild(p);
    });
}

function delData(index){
    myLibary.splice(index, 1);
}

// HELPER

function resetData(){
    while(data.firstChild){
        data.removeChild(data.firstChild);
    }
}
