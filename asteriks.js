var rows1 = 5;
for(let i = 0; i < rows1; i++) {
    console.log("*");
}

var rows2 = 5;
for(let i = 0; i < rows2; i++) {
    var baris = '';
    for(let j = 0; j < rows2; j++){
        baris += '*'
    }
    console.log(baris)
}

var rows3 = 5;
for(let i = 0; i < rows3; i++) {
    var baris2 = '';
    for(let j = 0; j <= i; j++) {
        baris2 += '*';
    }
    console.log(baris2);
}
