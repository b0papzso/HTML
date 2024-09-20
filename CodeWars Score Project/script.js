const url = "https://www.codewars.com/api/v1/users/"

function getCodeWarsID() {
        document.getElementById("eredmeny").innerHTML = "";
        document.getElementById("nyelvek").innerHTML = "";
        var codeWarsName = document.getElementById("fhnev").value;
        fetch(url + codeWarsName
        ).then(response => response.json())
        .then(data => {
            printBasic(data)
        })
        .catch(error =>
        {
            alert("Hibás felhasználónév!")
        })
};

function printBasic(data)
{
    var eredmeny = document.getElementById("eredmeny");
    eredmeny.innerHTML += "<table><tbody><tr><th>Neve</th><th>Felhasználóneve</th><th>Összesített pontszám</th><th>Rang</th></tr>" + 
                        "<tr><td>" + data.name + "</td><td>" + data.username + "</td><td>" + data.honor + "</td><td>" + data.ranks.overall.name + "</td></tr>"
                        + "</table><br>" + printLang(data);
}

function printLang(data)
{
    var eredmeny = document.getElementById("nyelvek");
    eredmeny.innerHTML += "<tr><th>Nyelvek</th><th>Rang</th><th>Elért pontok</th><th>Elért rang színe</th></tr>"
    for(var element in data.ranks.languages)
    {   
        let langData = data.ranks.languages[element];
        console.log(element)
        console.log(data.ranks.languages[element].rank)
        console.log(data.ranks.languages[element].score)
        console.log(data.ranks.languages[element].color)
        eredmeny.innerHTML += "<tr><td>" + element + "</td><td>" + langData.name + "</td><td>" + langData.score + "</td><td>" +  langData.color + "</td></tr><br>";
    }
}