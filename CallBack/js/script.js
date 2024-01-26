function szamol(muvelet, szam1, szam2)
{
    return muvelet(szam1, szam2)
}

const osszeadas =(szam1, szam2) => szam1 + szam2;
const kivonas =(szam1, szam2) => szam1 - szam2;
const szorzas =(szam1, szam2) => szam1 * szam2;
const osztas =(szam1, szam2) => szam1 / szam2;

let result = szamol(osszeadas, 5, 3);
console.log(result);
result = szamol(kivonas, 5, 3);
console.log(result);
result = szamol(szorzas, 5, 3);
console.log(result);
result = szamol(osztas, 5, 3);
console.log(result);