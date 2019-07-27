const input = document.getElementById("form").elements;
const data = document.getElementById("data");

let myLibary = [];
let judul = input.judul;
let pengarang = input.pengarang;
let halaman = input.halaman;
let baca = input.baca;
let simpan = input.simpan;


simpan.addEventListener("click", () =>{
    addBook();
    //render();
});

// Kelas Buku (START)
function Book (judul, pengarang, halaman, isread){
    this.judul = judul;
    this.pengarang = pengarang;
    this.halaman = halaman;
    this.isRead = isread;
}

Book.prototype.isBaca = function(){
    if(this.isRead === "sudah"){
        this.isRead = "belum";
    }else{
        this.isRead = "sudah";
    }
};
// Kelas Buku (END)

function addBook (){
    if(checkForm()){
        myLibary.push(new Book(
            judul.value,
            pengarang.value,
            halaman.value,
            baca.value
            ));
    }
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

// Validator

function checkForm(){
    if(judul.value.length <= 0){
        alert("Judul tidak boleh kosong");
        return false;
    }else if(pengarang.value.length <= 0){
        alert("Pengarang tidak boleh kosong");
        return false;
    }else if(halaman.value.length <= 0 || isNaN(halaman.value)){
        alert("Halaman harus angka");
        return false;
    }
    return true;
}

// HELPER

function resetData(){
    while(data.firstChild){
        data.removeChild(data.firstChild);
    }
}
