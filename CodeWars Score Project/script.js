const url = "https://www.codewars.com/api/v1/users/"

function getCodeWarsID() {
        var codeWarsName = document.getElementById("fhnev").value;
        fetch(url + codeWarsName
        ).then(response => response.json())
        .then(data => {
            printBasic(data)
        })
    };

function printBasic(data)
{
    var eredmeny = document.getElementById("eredmeny");
    console.log(data)
    eredmeny.innerHTML += "<h3>Neve:</h3>" + data.name + 
                        "<br><h3>Összesített pontszám, rang:</h3>" + data.honor + " pont, " + data.ranks.overall.rank  + " rang"
                        + "<br><h3>Nyelvek:</h3>" + printLang(data);
}

function printLang(data)
{
    var eredmeny = document.getElementById("nyelvek");
    for(var element in data.ranks.languages)
    {   
        let langData = data.ranks.languages[element];
        console.log(element)
        console.log(data.ranks.languages[element].rank)
        console.log(data.ranks.languages[element].score)
        console.log(data.ranks.languages[element].color)
        eredmeny.innerHTML += "<div>" + "<h4>"  + element + ":"  + "</h4>" + "Rang:" + langData.rank + "<br>Elért pont :" + langData.score + "<br>Elért szint színe:" +  langData.color + " </div> <br>";
    }
}