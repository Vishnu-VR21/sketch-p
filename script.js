const container = document.querySelector(".container");
const input = document.querySelector("#inputs")
const button = document.querySelector("#submit");

function getUserInput() {
    const value = Number(input.value)
    console.log(value)

    container.innerHTML = ""

    for (let i = 1; i <= value * value; i++) {
        const div = document.createElement("div");
        
        div.classList.add("box");

        div.style.width = `calc((100% - ${(value-1) * 3}px) / ${value})`

        container.appendChild(div);
    }
}

button.addEventListener('click', getUserInput)

for (let i = 1; i <= 256; i++) {
    const div = document.createElement("div");
    
    div.classList.add("box");

    container.appendChild(div);
}


container.addEventListener("click", function(e) {
    if (e.target.classList.contains("box")) {
        e.target.style.background = "blue"
    }
})