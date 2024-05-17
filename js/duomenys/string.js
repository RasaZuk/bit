//string - tekstine informacija//

const x = 0;
const bendras = "Pinigines turinys: ";
const papildymas = "Pinigine papildyta: ";
const pirmas = 10;
const antras = 90;

const rezultatas = x + pirmas;

console.log(bendras + x);
console.log(papildymas + pirmas);
console.log(bendras + pirmas);
console.log(papildymas + antras);
console.log(bendras + rezultatas + antras);

const newtry = 1;
console.log(newtry);


/*
<header>
    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>
    </nav>
</header>;
*/



const html = '\
<header>\n\
    <img>\n\
    <nav>\n\
        <a></a>\n\
        <a></a>\n\
        <a></a>\n\
    </nav>\n\
</header > ';

console.log(html);

/*const html = '\
<header>\n\
\t<img>\n\
\t<nav>\n\
\t\t<a></a>\n\
\t\t<a></a>\n\
\t\t<a></a>\n\
\t</nav>\n\
</header > ';
*/
console.log('------');
console.log('backtick');
const backtick = `Labas rytas, Lietuva!`;
console.log(backtick);

const HTML2 = `<header>
    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>
    </nav>
</header>`;
console.log(HTML2);

const a = 7;
const b = 5;
const c = a + b;
//noriu rezultato: 7+5=12
const ats = `${a} + ${b} = ${c};`
console.log(ats);

//mini 1 naujas variantas
const start = 0;
const finish = 11;
const step = 3;
const answer = 4;

const mini1 = 'Skaiciu intervale tarp ' + start + ' ir ' +
    finish + ', besidalijanciu be liekanos is ' + step + ' yra ' + answer + ' vienetai.';
console.log(mini1);

const mini2 = `Skaiciu intervale tarp ${start} ir ${finish}, besidalijanciu be liekanos is ${step} yra ${answer} vienetai.`;
console.log(mini2);

console.log(mini2.length); //viso stringo ilgis
console.log(mini2[0]); // stringo pirmas elementas