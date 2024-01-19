let key = ['A', 'C', 'D', '_'];

function check(answer){
    let blank = 0;
    let points = 0;
    for (let i = 0; i < answer.length; i++) {
        document.getElementById("eredmeny").innerHTML += "Kulcs: " + key[i] + "<br>A megoldása: " + answer[i];
        if(key[i] == answer[i])
        {
            points++;
            console.log("Pontok: " + points)
        }
        if(key[i] == '_')
        {
            blank++;
            console.log("Üres: " + blank);
        }
    }

    if(points == (key.length-blank) || points == 0)
    {
        document.getElementById("eredmeny").innerHTML += "<br>Átment!"
    }
    else{console.log("Nem ment át!")}
}

console.log(check(['A', 'C', 'D', 'E']))
console.log(check(['D', 'E', 'A', 'E']))
console.log(check(['A', 'A', 'C', 'D']))