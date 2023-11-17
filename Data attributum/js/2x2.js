
function changeColor()
{
    let color = 0; //sarga = 0 piros = 1 kek = 2
    let index = document.getElementsByClassName("item").dataset.indexNumber;

    if(color = 0)
    {
        index.style.backgroundColor = "red";
        color += 1; 
    }
    if(color = 1)
    {
        index.style.backgroundColor =  "blue";
        color += 1; 
    }
    if(color = 2)
    {
        index.style.backgroundColor = "yellow";
        color = 0; 
    }
}