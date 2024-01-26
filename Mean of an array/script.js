function mean(grades)
{
    let all = 0;
    for (let i = 0; i < grades.length; i++) {
        all += grades[i];
    }
    return Math.floor(all / grades.length);
}

let test1 =  [5, 4, 4, 5, 5];
let test2 = [4, 2, 3, 5 , 5];

console.log(mean(test1));
console.log(mean(test2));