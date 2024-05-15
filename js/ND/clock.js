/* 
galimos laiko kombinacijas valandos tikslumu
intervalas nuo 1 iki 12 val.
pateikimo formatas: 1:00, 2:

*/

/*
//atvaizdavimas valandu
for (let i = 1; i <= 12; i++) {
    console.log(i + ':00');
}
*/


/*
//atvaizdavimas su minutemis, intervalu 15 min
//vieno ciklo ribose
for (let val = 1; val <= 4; val++) {
    console.log('--------');
    let min = 0;
    console.log(val + ':' + min);
    min += 15;
    console.log(val + ':' + min);
    min += 15;
    console.log(val + ':' + min);
    min += 15;
    console.log(val + ':' + min);
    min += 15;
}
*/

/*
for (let val = 1; val <= 4; val++) {
    console.log('--------');
    let min = 0;

    for (let val = 1; val <= 4; val++) {
        if (min < 10) {
            console.log(val + ':0' + min);
        } else {
            console.log(val + ':' + min);
        }
        min += 15;
    }
}


//sukasi nuo 15 iki 17 val, kas 10 min

for (let val = 15; val <= 17; val++) {
    console.log('--------');
    let min = 0;

    for (let i = 0; i <= 6; i++) {
        if (min < 10) {
            console.log(val + ':0' + min);
        } else {
            console.log(val + ':' + min);
        }
        min += 10;
    }
}

*/

//su sekundemis

for (let val = 15; val <= 15; val++) {
    console.log('--------');

    for (let min = 0; min <= 4; min++) {

        for (let sek = 0; sek < 60; sek++) {
            console.log(val + ':' + min + ':' + sek);
        }
    }
}