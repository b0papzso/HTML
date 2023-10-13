var tomb = ["Első elem", "Második elem", "Harmadik elem"];

// 1. feladat
function elsoelem(){
    document.getElementById("eredmeny").innerHTML = tomb[0];
}

function masodikelem(){
    document.getElementById("eredmeny").innerHTML = tomb[1];
}

function harmadikelem(){
    document.getElementById("eredmeny").innerHTML = tomb[2];
}

//2. feladat
function osszeselem(){
    document.getElementById("eredmeny").innerHTML = "";
    for(let i in tomb){
        document.getElementById("eredmeny").innerHTML += tomb[i];
        document.getElementById("eredmeny"). innerHTML += ","
    }
}

// 3. feladat
function bevitel(){
    var be = document.getElementById("hozzaad").value;
    console.log(be);
    tomb.push(be);
}

// 4. feladat
function tombhossza(){
    var szam = 0
    for(let i in tomb)
    {
        szam++;
    }
    document.getElementById("eredmeny").innerHTML = szam + "db elem van a tömbben";
}

// 5. feladat
function torles(){
    var torloSzam = parseInt(document.getElementById("torles").value);
    tomb.splice(torloSzam, 1);
}