let hari = 28;
let bulan = 2;
let tahun = 1945;

switch(bulan) {
    case 1:
        if (hari > 31 || tahun < 1900 || tahun > 2200) {
            console.log("Silahkan input tanggal, bulan dan tahun dengan benar!")
        }
        else {
            console.log(`${hari} Januari ${tahun}`);
        }
        break;
    case 2:
        if (hari > 29) {
            console.log("Silahkan input tanggal dengan benar")
        }
        else {
        console.log(`${hari} Februari ${tahun}`);
        }
        break;
    case 3:
        if (hari > 31 || tahun < 1900 || tahun > 2200) {
            console.log("Silahkan input tanggal, bulan dan tahun dengan benar!");
        }
        else {
        console.log(`${hari} Maret ${tahun}`);   
        }
        break;  
    case 4:
        if (hari > 30 || tahun < 1900 || tahun > 2200) {
            console.log("Silahkan input tanggal, bulan dan tahun dengan benar!");
        }
        else {
        console.log(`${hari} April ${tahun}`)   
        }
        break;        
    case 5:
        if (hari > 31 || tahun < 1900 || tahun > 2200) {
            console.log("Silahkan input tanggal, bulan dan tahun dengan benar!")
        }
        else {
        console.log(`${hari} Mei ${tahun}`)   
        }
        break;        
    case 6:
        if (hari > 30 || tahun < 1900 || tahun > 2200) {
            console.log("Silahkan input tanggal, bulan dan tahun dengan benar!")
        }
        else {
        console.log(`${hari} Juni ${tahun}`)   
        }
        break;        
    case 7:
        if (hari > 31 || tahun < 1900 || tahun > 2200) {
            console.log("Silahkan input tanggal, bulan dan tahun dengan benar!")
        }
        else {
        console.log(`${hari} Juli ${tahun}`)   
        }
        break;        
    case 8:
        if (hari > 31 || tahun < 1900 || tahun > 2200) {
            console.log("Silahkan input tanggal, bulan dan tahun dengan benar!")
        }
        else {
        console.log(`${hari} Agustus ${tahun}`)   
        }
        break;        
    case 9:
        if (hari > 30 || tahun < 1900 || tahun > 2200) {
            console.log("Silahkan input tanggal, bulan dan tahun dengan benar!")
        }
        else {
        console.log(`${hari} September ${tahun}`)   
        }
        break;        
    case 10:
        if (hari > 31 || tahun < 1900 || tahun > 2200) {
            console.log("Silahkan input tanggal, bulan dan tahun dengan benar!")
        }
        else {
        console.log(`${hari} Oktober ${tahun}`)   
        }
        break;        
    case 11:
        if (hari > 30 || tahun < 1900 || tahun > 2200) {
            console.log("Silahkan input tanggal, bulan dan tahun dengan benar!")
        }
        else {
        console.log(`${hari} November ${tahun}`)   
        }
        break;        
    case 12:
        if (hari > 31 || tahun < 1900 || tahun > 2200) {
            console.log("Silahkan input tanggal, bulan dan tahun dengan benar!")
        }
        else {
        console.log(`${hari} Desember ${tahun}`)   
        }
        break;                      
    default: console.log("Silahkan input bulan dengan benar!")
}

