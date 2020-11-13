taskarray = []
completedtask = []

function todo() {

    let a = document.getElementById('task').value;
    if (a == "") {
        document.getElementById("error").innerHTML = "Please Enter Some Task First";
    } else {
        taskarray.push(a)
        console.log(taskarray)
        display()
    }


}

function display() {
    form = ''
    form += "<table style='margin-left:750px;background-color:lightblue'>";
    form += "<tr><h1>PENDING TASK</h1></tr>";
    for (i = 0; i <= taskarray.length - 1; i++) {
        form += "<tr ><td ><input  type='checkbox'  id='name' value=" + taskarray[i] + " onchange=addtocheck(this.value," + i + ")>" + taskarray[i] + "";
        form += "<input type='text' id='edit" + i + "' value=" + taskarray[i] + " ><button onclick=edit(" + i + ")>EDIT</button><button onclick=deletetask(" + i + ")>Delete</button></td>";
        form += "</tr>";
    }

    form += "</table>"
    document.getElementById('result').innerHTML = form;
    document.getElementById('task').value = "";
}

function addtocheck(value, i) {
    taskarray.splice(i, 1)
    let forms;
    forms = '';
    completedtask.push(value);
    displayselected();
    display();
}

function deletetask(value) {
    taskarray.splice(value, 1);
    display();
    console.log(completedtask)
    console.log(value);
    var a = document.getElementById("edit" + value + "").value;
    console.log(a)
    taskarray[value] = a
    display();
}

function addtotaskarray(value, i) {
    console.log(i)
    completedtask.splice(i, 1)
    taskarray.push(value)
    console.log(completedtask)
}

function displayselected() {
    let forms;
    forms = ''
    form += "<div>";
    forms += "<h1>Completed Task </h1>";
    for (i = 0; i <= completedtask.length - 1; i++) {

        forms += "<input  type='checkbox' value=" + completedtask[i] + " onchange='removefromcompleted(" + i + ")'checked><span>" + completedtask[i] + "</span>";
        forms += "<input type='text' value=" + completedtask[i] + " id='completed" + i + "'><button onclick=editfromcompleted(" + i + ")>Edit</button>";
        forms += "<button onclick=deletefromcompleted(" + i + ")>DELETE</button><br>";

    }
    forms += "</div>";
    document.getElementById('completed').innerHTML = forms;
}

function removefromcompleted(i) {
    let value = completedtask[i];
    completedtask.splice(i, 1);
    displayselected();
    console.log(value);
    console.log(completedtask);
    taskarray.push(value)
    display();

}

function edit(i) {
    taskarray[i] = document.getElementById("edit" + i + "").value
    display();

}

function deletefromcompleted(i) {
    completedtask.splice(i, 1);
    displayselected()
}

function editfromcompleted(i) {
    let a = document.getElementById("completed" + i).value
    completedtask[i] = a
    displayselected()
}