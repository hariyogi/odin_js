const cardFactory = (judul, harga, desk, gambar) => {
    "use strict"
    const getJudul = () => judul;
    const getHarga = () => harga;
    const getDesk = () => desk;
    const getGambar = () => gambar;

    return {getDesk, getGambar, getJudul, getHarga};
}

const content = (() =>{
    "use strict"
    const simpleContent = (isi = "", gambar = "") =>{
        const img = document.createElement("img");
        const p = document.createElement("p");
        p.textContent = isi;
        img.setAttribute("src", gambar);
        return (gambar === "") ? [p] : [img, p];
    }

    const createCard = cardObject =>{
        const div = document.createElement("div");
        div.setAttribute("id", "card-board");
        cardObject.forEach(obj => {
            const card = document.createElement("div");
            const img = document.createElement("img");
            const judul = document.createElement("p");
            const harga = document.createElement("p");
            const desk = document.createElement("p");
            card.className = "card";
            judul.className ="judul";
            harga.className = "harga";
            desk.className= "desk";
            img.setAttribute("src", obj.getGambar());
            judul.textContent = obj.getJudul();
            harga.textContent = obj.getHarga();
            desk.textContent = obj.getDesk();
            card.append(img, judul, harga, desk);
            div.appendChild(card);
        });
        return [div];
    }

    return {simpleContent, createCard};

})();

const home = content.simpleContent(
        "Heaven Cake adalah toko kue yang sangat terkenal di Bali. Toko kue ini berdiri sejak tahun 2010 dan " +
        "pernah mendapatkan penghargaan toko terbaik tahun 2012. Heaven cake akan membuat kue sesuai pesanan " +
        "dan rasanya akan membuat anda melayang pergi ke angkasa",
        "cake-logo.png"
);

const contact = content.simpleContent(
        "Hubungi kami di nomer : 0811234546 \nAnda dapat datang ke toko kami di Jl.Toko kue"
);

const menuCard = content.createCard(
        [
            cardFactory("Black Chocolatos", 20000, "Coklat nikmat", "cake-thumb.jpg"),
            cardFactory("Another Black", 30000, "Coklat nikmat", "cake-thumb.jpg"),
            cardFactory("Another Big Black", 40000, "Coklat nikmat", "cake-thumb.jpg"),
            cardFactory("Whatever", 50000, "Coklat nikmat", "cake-thumb.jpg"),
        ]
);

export {home, contact, menuCard}