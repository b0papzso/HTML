function swap(parameter)
{
    let fel = parameter.length/2;
    let eredmeny = [];
    for (let i = fel; i < parameter.length; i++) {
        eredmeny.push(parameter[i]);
    }
    for (let j = 0; j < fel; j++) {
        eredmeny.push(parameter[j]);
    }
    return eredmeny;
}

let proba1 = [1, -2, 3, 5];
let proba2 = [5, 10, 20, 30, 45, 75];
let proba3 = [5, 3, 2];

console.log("Eredeti számok: " + proba1 + "\r\nMegfordítva: " + swap(proba1));
console.log("Eredeti számok: " + proba2 + "\r\nMegfordítva: " + swap(proba2));