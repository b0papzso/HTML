const url = "https://vvri.pythonanywhere.com/api/courses";
const urlStudent = "https://vvri.pythonanywhere.com/api/students";



async function allCourses() {
    try{
        document.getElementById("eredmeny").innerHTML = "";
        const response = await fetch(url);
        const data = await response.json();
        let li = `<tr><th>ID</th><th>Kurzus</th></tr>`;
        if(data){
        data.forEach(course =>
        li += `<tr>
        <td>${course.id} </td>
        <td>${course.name}</td>`);
        li += `<td><button onclick="deleteCourse();" id="deleteBtn"></button></td></tr>`;
        
};
    li += `<button onclick="showCourseAdd();" id="addCourseBtn"></button>`
    document.getElementById("eredmeny").innerHTML = li;
    }
catch(error)
{console.error("Hiba történt: ", error)};
    }
    

async function showCourseAdd()
{
    try{
    document.getElementById("eredmeny").innerHTML = "";
    document.getElementById("bekeres").innerHTML = ` <input type="text" name="courseName" id="courseName" placeholder="Kurzus neve">
    <button onclick="addCourse();" id="addStudentBtn"></button>`
    }
    catch(error)
{console.error("Hiba történt: ", error)};
}

async function addCourse(){
    if (document.getElementById("courseName").value.trim() === "")
    {
        alert("Nem adott meg semmit kurzusnévnek!")
        return
    }
    try{
        const response = await fetch(url, {
     
        method: "POST",
         
        // Küldendő test vagy tartalom hozzáadása
        body: JSON.stringify({
            name: document.getElementById("courseName").value
            
        }),
        // Fejlécek hozzáadása a kéréshez
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
     
    // Konvertálás JSON-ba
    .then(response => response.json())
     alert("Hozzáadott egy kurzust!")
     document.getElementById("bekeres").innerHTML = "";
     allCourses();
    // Az eredmények megjelenítése a konzolon
}
catch(error)
{console.error("Hiba történt: ", error)};
}


async function courseNumberGet()
{
    document.getElementById("eredmeny").innerHTML = "";
    try{
    var courseNumber = parseInt(document.getElementById("courseNumber").value);
    const response = await fetch(url)
    const data = await response.json()
    let li = `<tr><th>Kurzus</th><th>ID</th><th>Diákok</th></tr>`;
    let index = 0;
    if(data)
    {
    data.forEach(course => {
        index++;
            if(index == courseNumber)
            {li += `<tr>
            
            <td>${course.name} </td>
            <td>${course.id}</td>`;
            for (let i = 0; i < course.students.length; i++) {
                li += `<td>${course.students[i].name}</td>`
                
            }
            li += `<td><button onclick="deleteCourse();" id="deleteBtn"></button></td></tr>`;
            li += `<button onclick="showCourseAdd();" id="addCourseBtn"></button>`

                }})};
    document.getElementById("eredmeny").innerHTML = li;
    }
    catch(error)
{console.error("Hiba történt: ", error)};
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
    fetch(url)
    .then(response => response.json())
    .then(json => {
    let li = `<tr><th>Diák</th><th>ID</th></tr>`;
    json.forEach(course => {
    for (let i = 0; i < course.students.length; i++) {
    li += `<tr>`
    li += `<td id="studentNameShow">${course.students[i].name}</td><td>${course.students[i].id}</td>`  
    li += `<td><button onclick="modifyStudentShow(${course.id}, ${course.students[i].id});" id="modifyBtn"></button></td></tr>`
    li += `<td><button onclick="deleteStudent(${course.students[i].id}, ${course.id});" id="deleteBtn"></button></td></tr>`;
    }});
    li += `<button onclick="showStudentAdd();" id="addStudentBtn"></button>`
    document.getElementById("eredmeny").innerHTML = li;
    });
}

function studentNumberGet()
{
    document.getElementById("eredmeny").innerHTML = "";
    var studentNumber = parseInt(document.getElementById("studentNumber").value);
    fetch(urlStudent)
    .then(response => response.json())
    .then(json => {
    let li = `<tr><th>Diák</th><th>ID</th></tr>`;
    json.forEach(student => {
            if(student.id == studentNumber)
            {li += `<tr>`
            li += `<td id="studentNameShow">${student.name}</td><td>${student.id}</td>`  
            li += `<td><button onclick="modifyStudentShow(${student.id});" id="modifyBtn"></button></td></tr>`
            li += `<td><button onclick="deleteStudent(${student.id});" id="deleteBtn"></button></td></tr>`;
            li += `<button onclick="showStudentAdd();" id="addStudentBtn"></button>`
            }
                });
    document.getElementById("eredmeny").innerHTML = li;
    });
}

function modifyStudentShow(id, studentId) {
    fetch(urlStudent)
    .then(response => response.json())
    .then(json => {
    document.getElementById("eredmeny").innerHTML = "";
    document.getElementById("bekeres").innerHTML = `<input type="text" name="studentName" id="studentNameModified" placeholder="Diák neve">
    <button onclick="modifyStudent(${id}, ${studentId});" id="modifyStudentBtn"></button>`
})
    
}

function modifyStudent(id, studentId)
{
    if (document.getElementById("studentNameModifed").value.trim() === "")
    {
        alert("Nem adott meg semmit diáknévnek!")
        return
    }
    console.log(id)
    console.log(studentId)
    var newName = document.getElementById("studentNameModified").value
    console.log(newName)
    document.getElementById("bekeres").innerHTML = ""
    fetch(`https://vvri.pythonanywhere.com/api/students/` + studentId, {
    method: "PUT",
    body: JSON.stringify({
        name: newName,
        course_id: id
    }),
    
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    
}
)
showStudentOptions()}

function deleteStudent(id)
{
    fetch(`https://vvri.pythonanywhere.com/api/students/${id}`, {
    method: "DELETE",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
alert("Kitörölte a diákot!")
showStudentOptions()
}

function showStudentAdd()
{
    document.getElementById("eredmeny").innerHTML = "";
    document.getElementById("bekeres").innerHTML = ` <input type="text" name="studentName" id="studentName" placeholder="Diák neve">
    <input type="text" name="courseId" id="courseId" placeholder="Kurzus ID-je">
    <button onclick="addStudent();" id="addStudentBtn"></button>`
    
}

function addStudent(){
    if (document.getElementById("studentName").value.trim() === "")
    {
        alert("Nem adott meg semmit diáknévnek!")
        return
    }
    fetch(urlStudent, {
     
        // Metódus hozzáadása
        method: "POST",
         
        // Küldendő test vagy tartalom hozzáadása
        body: JSON.stringify({
            course_id: parseInt(document.getElementById("courseId").value),
            name: document.getElementById("studentName").value
            
        }),
        // Fejlécek hozzáadása a kéréshez
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
     
    // Konvertálás JSON-ba
    .then(response => response.json())
     alert("Hozzáadott egy diákot!")
     document.getElementById("bekeres").innerHTML = "";
     showStudentOptions()
}
