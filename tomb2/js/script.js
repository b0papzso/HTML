var tomb = [];

function getInputValue(){
    var adat = document.querySelector('input').value;
    console.log(adat);
    tomb.push(adat);
    console.log(tomb.length);
    let kimenet = "" ;
    for(let i in tomb)
    {
        kimenet += '<div id="adat">' + tomb[i] + "</div>";
    }
    document.getElementById("elements").innerHTML = kimenet;
}