const szamkereses = () =>{

    let szamok = document.getElementById("sorozat").value.split(',');
    let szam = [];
    let minszam = Number.MAX_VALUE;
    let valueorindex = document.getElementById("valorind");
    let minindex;
    for(let y = 0; y < szamok.length; y++)
        {
            szam.push(parseInt(szamok[y]));
        }

        for(let i = 0; i < szam.length; i++)
        {
            if(minszam > szam[i])
            {
                minszam = szam[i]
                minindex = i;
            }
        }
        
    if(valueorindex == "value")
    {
        document.getElementById("eredmeny").innerHTML += minszam;
    }

    if(valueorindex == "index")
    {
        document.getElementById("eredmeny").innerHTML += minindex;
    }
    
}