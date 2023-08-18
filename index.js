

let contextButton = document.getElementById("contextualize")
let resultsBoard = document.getElementById("results")
let figure = document.getElementById("figure")

function validateNumberInput(input) {

    let value = input.value;
    let regex = /^\d+$/;
    if (!regex.test(value) && value != "") {
      alert("Please enter only numbers");
      input.value = "";
    }
  }
  
function checkLength(input) {
    let variable = input.target
    validateNumberInput(variable)
    if (variable.value.length > 3) {
        variable.value = variable.value.slice(0, 3);

    }
}

function printvalue(input){
    console.log(input.target.value)
}

figure.addEventListener("input", checkLength)

contextButton.addEventListener("click", () => {
  console.log("context generated")
  resultsBoard.style.display = "flex"
  figure.value = ""
})




