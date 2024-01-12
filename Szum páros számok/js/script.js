const ossze = () =>{
    let szamszoveg = document.getElementById("szamok").value.split(',');
    let szamok = []
    let szum = 0;
    for (let index = 0; index < szamszoveg.length; index++) {
        szamok.push(parseFloat(szamszoveg[index]))
    }

    for (let index = 0; index < szamok.length; index++) {
        if (Math.pow(szamok[index], 3) % 2 == 1) {
            szum += Math.pow(szamok[index], 3);
        }       
    }

    if(szum == 0)
    {
        szum = "undefined";
    }
    
    document.getElementById("eredmeny").innerHTML = szum;
}
