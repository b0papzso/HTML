function szamolas()
{
    let szovegSzamokkal = document.getElementById("szamkiemeles").value;
    let szamok = "";
    for (let i = 0; i < szovegSzamokkal.length; i++) {
        if(szovegSzamokkal[i] == '0' || szovegSzamokkal[i] == '1' || szovegSzamokkal[i] == '2' || szovegSzamokkal[i] == '3' || szovegSzamokkal[i] == '4' || szovegSzamokkal[i] == '5' || szovegSzamokkal[i] == '6' || szovegSzamokkal[i] == '7' || szovegSzamokkal[i] == '8' || szovegSzamokkal[i] == '9') 
        {
            szamok += szovegSzamokkal[i];
        }
    }
    
    document.getElementById("eredmeny").innerHTML = szamok;
}