var enterbut = document.getElementById("submit");
var remove = document.getElementsByClassName("delete");
var ul = document.querySelector("ul");
var input = document.getElementById("text-input");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	//if (inputLength() > 0) {
		createListElement().classList.add("item");
	}

 function addListAfterKeypress() {
 	if (inputLength() > 0 && event.keyCode === 13) {
 		createListElement().classList.add("item");
 	}
 }

enterbut.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);