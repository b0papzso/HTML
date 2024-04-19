const url = "https://vvri.pythonanywhere.com/api/courses";
const urlStudent = "https://vvri.pythonanywhere.com/api/students";



function allCourses() {
    document.getElementById("eredmeny").innerHTML = "";
    fetch(url)
    .then(response => response.json())
    .then(json => {
    let li = `<tr><th>Kurzus</th><th>ID</th><th>Diákok</th></tr>`;
    json.forEach(course => {
    li += `<tr>
    
    <td>${course.name} </td>
    <td>${course.id}</td>`;
    for (let i = 0; i < course.students.length; i++) {
        li += `<td>${course.students[i].name}</td>`
        console.log(course.students[i].name)
        
    }
    li += `<td><button onclick="deleteCourse();" id="deleteBtn"></button></td></tr>`;
    });
    li += `<button onclick="addStudent();" id="addBtn"></button>`
    document.getElementById("eredmeny").innerHTML = li;
    });
}

function courseNumberGet()
{
    document.getElementById("eredmeny").innerHTML = "";
    var courseNumber = parseInt(document.getElementById("courseNumber").value);
    fetch(url)
    .then(response => response.json())
    .then(json => {
    let li = `<tr><th>Kurzus</th><th>ID</th><th>Diákok</th></tr>`;
    let index = 0;
    json.forEach(course => {
        index++;
            if(index == courseNumber)
            {li += `<tr>
            
            <td>${course.name} </td>
            <td>${course.id}</td>`;
            for (let i = 0; i < course.students.length; i++) {
                li += `<td>${course.students[i]}</td>`
                
            }
            li += `</tr>`
                }});
    document.getElementById("eredmeny").innerHTML = li;
    });
}

function deleteCourse()
{
    fetch(url, {
    method: "DELETE",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => {
    if (response.ok) {
        return response.json();
    }
    throw new Error('Network response was not ok.');
})
.then(json => console.log(json))
alert("Kitörölte a kurzust!")

}

function showStudentOptions()
{
    document.getElementById("eredmeny").innerHTML = "";
    fetch(urlStudent)
    .then(response => response.json())
    .then(json => {
    let li = `<tr><th>Diákok</th><th>ID</th></tr>`;
    json.forEach(students => {
        console.log(students.name)
    li += `<tr>`
    li += `<td>${students.name}</td><td>${students.id}</td>`  
    li += `<td><button onclick="deleteStudent();" id="deleteBtn"></button></td></tr>`;
    });
    li += `<button onclick="addStudent();" id="addBtn"></button>`
    document.getElementById("eredmeny").innerHTML = li;
    });
}

function deleteStudent()
{
    fetch(urlStudent, {
    method: "DELETE",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => {
    if (response.ok) {
        return response.json();
    }
    throw new Error('Network response was not ok.');
})
.then(json => console.log(json))
alert("Kitörölte a diákot!")

}