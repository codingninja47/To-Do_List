var inputBox = document.getElementById("input-box");
var listContainer = document.getElementById("list-container");
function addtask() {
    if (inputBox.value=="") {
        alert("you must write something!");
    }
    else {
        var li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // unicode for multiplication sign (x)
        li.appendChild(span);

    }
    inputBox.value = " ";
    saveData();


}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }

},false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();