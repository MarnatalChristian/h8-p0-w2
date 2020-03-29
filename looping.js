console.log("")
var loop1 = 1;
console.log("LOOPING PERTAMA");
while(loop1 <= 20) {
    if(loop1 % 2 == 0) {
        console.log(loop1 + ' '+ '-' + ' ' + 'I love coding');
    }
    loop1++; 
}
var loop2 = 20;
console.log("LOOPING KEDUA");
while(loop2 > 0) {
    if(loop2 % 2 == 0) {
        console.log(loop2 + ' '+ '-' + ' ' + 'I will become fullstack developer');
    }
    loop2--;
}

console.log("====================");

console.log('LOOPING PERTAMA');
for(let i = 1; i <= 20; i++) {
    console.log(i + ' ' + '-' + ' ' + 'I love coding');
}

console.log('LOOPING KEDUA');
for(let i = 20; i > 0; i--) {
    console.log(i + ' ' + '-' + ' ' + 'I love coding');
}
console.log("=========");

var loop3 = 1;
while(loop3 <= 100) {
    if(loop3 % 2 == 0) {
        console.log("GENAP");
    }
    else {
        console.log("GANJIL");
    }
    loop3++;
}
console.log("------------");

for(let i = 1 ; i <= 100; i+=2) {
    if(i % 3 == 0) {
        console.log(`${i} KELIPATAN 3`);
    }
}
console.log('---------------');

for(let i = 1 ; i <= 100; i+=5) {
    if(i % 6 == 0) {
        console.log(`${i} KELIPATAN 6`);
    }
}
console.log('---------------');

for(let i = 1 ; i <= 100; i+=9) {
    if(i % 10 == 0) {
        console.log(`${i} KELIPATAN 10`);
    }
}