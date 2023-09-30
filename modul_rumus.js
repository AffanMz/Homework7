//Catatan Sistem -----
//Catatan Sistem -----

//Note : module yang berisi rumus menghitung luas dan keliling bangun datar persegi dan persegi panjang.

// rumus menghitung luas persegi
function luasPersegi(sidelenght) {
    return sidelenght*sidelenght;
}

// rumus menghitung keliling persegi
function kelilingPersegi (sidelenght) {
    return sidelenght*4;
}

// rumus menghitung luas persegi panjang
function luasPersegiPanjang (lenght, width){
    return lenght * width;
}

// rumus menghitung keliling persegi panjang
function kelilingPersegiPanjang (lenght,width) {
    return (lenght+width)*2;
}

module.exports = {
    kelilingPersegi,
    kelilingPersegiPanjang,
    luasPersegi,
    luasPersegiPanjang
}
