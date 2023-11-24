let heroes = [
    {firstName: "Ahsoka", lastName: "Tano", job: "padawan"},
    {firstName: "Boba", lastName: "Fett", job: "fejvadász"},
    {firstName: "Han", lastName: "Solo", job: "csempész"},
    {firstName: "Leia", lastName: "Organa", job: "szenátor"}, 
    {firstName: "Durdikh", lastName: "Lakatos", job: "földműves"}
];

    let ki = ``;
    for(let i in heroes)
    {
        ki += `
        <div id="kartya">${heroes[i].firstName} ${heroes[i].lastName}, munkája: ${heroes[i].job}</div>
        `
    }

    document.getElementById("eredmeny").innerHTML =ki;