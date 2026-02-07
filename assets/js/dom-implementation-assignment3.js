function changeColor(element) {
    let color = element.innerText;
    element.style.backgroundColor = color;
    element.style.color = "#ffffff";
}
function greetUser() {
    let name = document.getElementById("username").value;
    let greeting = document.getElementById("greeting");
    if (name.trim() !== "") {
        greeting.innerText = "Hello, " + name;
    } else {
        greeting.innerText = "Hello";
    }
}
