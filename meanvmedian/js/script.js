function meanvmedian(array){
    array.sort();
    let middle = 0;
    let mean = 0;
    
    for (let y = 0; y < Math.ceil(array.length/2); y++) {
        middle = array[y];
        
    }

    for (let i = 0; i < array.length; i++) {
        mean += array[i]
    }
    mean = mean / array.length;
    console.log(mean)
    console.log(middle)
    if(mean > middle)
    {
        return "mean"
    }
    else if(mean < middle)
    {
        return "median"
    }
    else if(mean == middle)
    {
        return "same"
    }
}

console.log(meanvmedian([1,1,1]));
console.log(meanvmedian([1,37,2]));
console.log(meanvmedian([7,14,-70]));