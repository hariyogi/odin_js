const input = document.getElementById("form").elements;
const data = document.getElementById("data");
const LIB = "libra";

let myLibary = [];
let judul = input.judul;
let pengarang = input.pengarang;
let halaman = input.halaman;
let baca = input.baca;
let simpan = input.simpan;
let reset = input.reset;

function init(){
    halaman.value = 1;
    if(storageAvailable(LOCAL_STORAGE)){
        if(!localStorage.getItem(LIB)){
            localStorage.setItem(LIB, JSON.stringify(myLibary));
        }else{
            storageToArray(JSON.parse(localStorage.getItem(LIB)));
            render();
        }
    }
    eventHandler();
}

function eventHandler() {
    simpan.addEventListener("click", () =>{
        addBook();
        render();
    });
    
    reset.addEventListener("click", () =>{
        myLibary.length = 0;
        render();
    });
}


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

// Menambahkan buku baru kedalam array
function addBook (){
    if(checkForm()){
        myLibary.push(new Book(
            judul.value,
            pengarang.value,
            halaman.value,
            baca.value
            ));
        localStorage.setItem(LIB, JSON.stringify(myLibary));
    }
}

// Menampilkan data kedalam tabel
function render(){
    resetData();
    myLibary.forEach((array, index) =>{
        data.appendChild(createTableData(array, index));
    });
}

// Validator form
// Return true => valid, false => tidak valid
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

// Henghapus semua data di tabel
function resetData(){
    while(data.firstChild){
        data.removeChild(data.firstChild);
    }
}

// Pindahkan array dari storage ke myLibrary
function storageToArray(array){
    array.forEach(value => {
        myLibary.push(new Book(
            value.judul,
            value.pengarang,
            value.halaman,
            value.isRead
        ));
    });
}

// Membuat data tabel.
// Return Node "td"
function createTableData(buku, index){
    const row = document.createElement("tr");
    const judul = document.createElement("td");
    const pengarang = document.createElement("td");
    const halaman = document.createElement("td");
    const baca = document.createElement("td");
    const action = document.createElement("td");
    const flagBaca = document.createElement("button");
    const flagHapus = document.createElement("button");
    /////// Tambah Content //////
    judul.textContent = buku.judul;
    pengarang.textContent = buku.pengarang;
    halaman.textContent = buku.halaman;
    if(buku.isRead === "sudah"){
        baca.style.color = "green";
        baca.textContent = "✓";
    }else{
        baca.style.color = "red";
        baca.textContent = "✖";
    } 
    flagBaca.textContent = "Sudah Baca";
    flagHapus.textContent = "Hapus";
    ////// Event Handler //////
    flagBaca.addEventListener("click", () =>{
        buku.isBaca();
        render();
    });
    flagHapus.addEventListener("click", () =>{
        myLibary.splice(index, 1);
        localStorage.setItem(LIB, JSON.stringify(myLibary));
        render();
    });
    ////// Buat Node element //////
    action.append(flagBaca, flagHapus);
    row.append(judul, pengarang, halaman, baca, action);
    return row;
}


// Mulai
init();