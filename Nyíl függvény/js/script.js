

const megfordit = (text) => {
    var text = document.getElementById("input");
    text = text.value.split('').reverse().join('');
document.getElementById("eredmeny").innerHTML = "<br>" + text;
}
;
