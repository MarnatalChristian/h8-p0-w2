let nama = 'laala';
let peran = 'sapi';

if (nama === '') {
    console.log("Nama harus diisi!")
}
else {
    if (peran === 'Ksatria') {
        console.log(`"Selamat datang diDunia Proxytia, ${nama}"`)
        console.log(`"Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!"`)

    }
    else if (peran === 'Tabib') {
        console.log(`"Selamat datang diDunia Proxytia, ${nama}"`)
        console.log(`"Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka."`)  
    }
    else if (peran === 'Penyihir') {
        console.log(`"Selamat datang diDunia Proxytia, ${nama}"`)
        console.log(`"Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenangan"`)
    }
    else {
        console.log(`"Halo ${nama}, Pilih peranmu untuk memulai game!"`);
    }
}