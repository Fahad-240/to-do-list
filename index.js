let items = [];
function addItems() {
    let input = document.getElementById("userInput").value;
    if (input !== "") {
        items.push(input);
        updateItemList();
        document.getElementById("userInput").value = "";
    } else {
        alert("please the input fields")
    }
}
function updateItemList() {
    document.getElementById("itemList").innerHTML = "";
    for (let i = 0; i < items.length; i++) {
        let li = document.createElement("li")
        li.textContent = items[i];
        li.classList.add("li");

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = ("delete");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = function () {

            items.splice(i, 1);
            updateItemList();

        }
        li.appendChild(deleteBtn);
        document.getElementById("itemList").appendChild(li);
    }
}



