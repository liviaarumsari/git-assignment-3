const person = {
    nama_depan: "Livia",
    nama_belakang: "Arumsari",
    hobi: ["menonton film", "dance"],
    angka_favorit: 7,
    memakai_kacamata: true,
}
console.log("PERSON: ", person);

// Cetak nama_lengkap dengan console.log
console.log("Nama lengkap: ", person.nama_depan, person.nama_belakang);

// Ubah angka_favorit jadi 8
person.angka_favorit = 8;
console.log("PERSON: ", person);

// Tambahkan satu hobi "coding"
person.hobi.push("coding")
console.log("PERSON: ", person);

// Tambahkan satu property "lulusan" dengan value "Hacktiv8"
person.lulusan = "Hacktiv8"
console.log("PERSON: ", person);

// Cetak semua hobi satu per satu menggunakan loop
console.log("HOBI: ");
for (const hobi of person.hobi) {
    console.log(hobi);
}

// Cetak semua key milik objek, dan cetak semua values milik objek
console.log("KEYS: ", Object.keys(person));
console.log("VALUES: ", Object.values(person));

// Gunakan loop untuk cetak semua property milik objek dengan format key : values
for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
}