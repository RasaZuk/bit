//[0 ... 1)

console.log(Math.random());

function moneta() {
    if (Math.random() < 0.5) {
        //[0...0.5)
        return 'Skaicius';
    } else {
        //[0.5..1)
        return 'Herbas';
    }
}
const metimuKiekis = 8;
let herbai = 0;
for (let i = 0; i < metimuKiekis; i++) {
    const iskrito = moneta();
    if (iskrito === 'Herbas') {
        herbai++;
    }
    console.log(iskrito);
}
console.log('HERBU KIEKIS:', herbai);
console.log('SKAICIUS KIEKIS', metimuKiekis - herbai);

//naujas pavyzdys
//reikia atsitiktines savaites dienos

const week = ['Pirm', 'Antr', 'Trec', 'Ketv', 'Penkt', 'Sest', 'Sekm'];
//const step = 1 / 7; pakeiciam tiesiog i 7 (dienos)

for (let i = 0; i < 10; i++) {
    const index = (Math.floor(Math.random() * week.length));
    console.log(week[index]);
}
//sugeneruoti atsitiktini indeksa is nurodyto masyvo


//reikia atsitiktinio skaiciaus intervale nuo 1 iki 10 imtinai
for (let i = 0; i < 10; i++) {
    console.log(Math.floor(Math.random() * 10) + 1);
}

//N.D
//reikia atsitiktinio skaiciaus intervale nuo 23 iki 617 imtinai

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(randomNumber(23, 617));