const url = "https://vvri.pythonanywhere.com/api/courses";

fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data)
                data.forEach(element => {
                    console.log(element)
            })
        })
        .catch(error => console.log("Hiba történt: " + error))