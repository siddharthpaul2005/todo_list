let input = document.querySelector("input")

let btn = document.querySelector("button")

let list = document.querySelector("ol")

btn.addEventListener("click", taskHandler)

function taskHandler() {
    let data = input.value;

    if (data == "") {
        alert("Please Enter Task before adding")
        return
    }
    let li = document.createElement("li")

    let taskText = document.createElement("span")
    taskText.innerText = data

    let del = document.createElement("button")
    del.innerText = "Delete"

    del.addEventListener("click", function () {
        list.removeChild(li)
    })

    li.appendChild(taskText)
    li.appendChild(del)
    list.appendChild(li)
    input.value = ""

}


