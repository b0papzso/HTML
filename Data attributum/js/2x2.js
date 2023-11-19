let colors = ["red", "blue", "yellow"]

function changeColor(obj) {
   
   obj.style.backgroundColor = colors[obj.dataset.index];
   obj.dataset.index = parseInt(obj.dataset.index)+1;
    if (obj.dataset.index =="3") {
        obj.dataset.index ="0";
    }
}