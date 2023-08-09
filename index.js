

function checkLength(input) {
    let variable = input.target
    if (variable.value.length > 1) {
        variable.value = variable.value.slice(0, 3);

    }
}

function printvalue(input){
    console.log(input.target.value)
}

let figure = document.getElementById("figure")


figure.addEventListener("input", checkLength)


