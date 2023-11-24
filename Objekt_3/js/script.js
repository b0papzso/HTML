let fizetes = {
    Anna : 2100,
    Cecil : 1890,
    Emil : 2050,
    Gerald : 2920
    }

let osszeg = 0;
let ki = `<ul>`;
for(let i in fizetes)
{
    ki += `
    <li>${i} : ${fizetes[i]}</li>
    `
    
    osszeg += fizetes[i];
}

ki += `<li>Összeg: ${osszeg}</li>`;

document.getElementById("eredmeny").innerHTML = ki + `</ul>`;

console.log(osszeg);
