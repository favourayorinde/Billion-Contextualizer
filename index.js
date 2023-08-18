

let contextButton = document.getElementById("contextualize")
let resultsBoard = document.getElementById("results")
let figure = document.getElementById("figure")
let resultBox = document.querySelectorAll(".box-test")

let billions = 0


//validate the inputs into the button
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

//Clears the input
//calculates the values
//displays the result
//scrolls to the result
contextButton.addEventListener("click", () => {
  console.log("context generated")
  resultsBoard.style.display = "flex"
  billions = figure.value
  figure.value = ""
  finalResult()
})

//formats currency properly
function formatDollar(number) {

  let dollarString = "$" + number.toString()

  for (let i = dollarString.length - 3; i > 1; i -= 3) {
    dollarString = dollarString.slice(0, i) + "," + dollarString.slice(i)
  }

  return dollarString
}

//formats large numbers properly
function formatNumber(number) {

  let yearString = number.toString()

  for (let i = yearString.length - 3; i > 0; i -= 3) {
    yearString = yearString.slice(0, i) + "," + yearString.slice(i)
  }

  return yearString
}


function finalResult(){
  resultbox0(billions)
  resultbox1(billions)
  resultbox2(billions)
  resultbox3(billions)
  resultbox4(billions)
  resultbox5(billions)
  resultbox6(billions)
  resultbox7(billions)
  resultbox8(billions)
  resultbox9(billions)
}

function resultbox0(billion){
  let earnings = Math.ceil((billion*1e9)/5000)
  earnings = formatDollar(earnings)
  resultBox[0].textContent = `You would have to earn ${earnings} every year from the time of the pyramids, roughly 5000 years ago, in order to have ${billion} Billion.`
}

function resultbox1(billion){

  let sum = Math.ceil((billion*1e9))
  let rate = Math.pow(sum / 1, 1 / (247)) - 1
  let roundRate = Math.round(rate * 100) / 100

  resultBox[1].textContent = `If you invested $1 on the day of the american independence, you would have to earn only an annual compound interest of ${roundRate}% in order to have $${billion} Billion today.`
}

function resultbox2(billion){
  let blinksPerYear = 4_200_000
  let blinkWages = 100
  let years = (billion*1e9)/(blinksPerYear*blinkWages)
  resultBox[2].textContent = `If you were paid ${blinkWages} dollars every single time you blinked, it would take you ${Math.floor(years)} years to get ${billion} billion dollars.`
}

function resultbox3(billion){
  let wages = 15
  const secondsPerHour = 60*60
  let hourPerYear = (billion*1e9)/(wages*8*365)
  let secondPerYear = (billion*1e9)/(wages*secondsPerHour*8*365)
  resultBox[3].textContent = `If you're flipping burgers at $15 an hour, working 8 hours every day with no breaks even on weekends and holidays, it would take you ${formatNumber(Math.ceil(hourPerYear))} years to make $${Math.ceil(billion)} Billion, if you were somehow making $15 per second, it would take you ${formatNumber(Math.floor(secondPerYear))} years.`
}

function resultbox4(billion){
  const NumbersPerSecond = 1000/557
  let years = (billion*1e9)/(NumbersPerSecond*3600*24*365)
  resultBox[4].textContent = `The world's fastest time to count to 1000 is 9:17s. At this rate, it would take ${formatNumber(Math.floor(years))} years to count up to ${billion} Billion.`
}

function resultbox5(billion){
  let days = Math.floor((billion*1e9/1e6) * 89)
  let years = Math.ceil(days/365.25)
  resultBox[5].textContent = `It took 89 days for Jeremy Harper to count to a million. If he'd kept going, it would have taken him ${formatNumber(days)} days, which is ${formatNumber(years)} years, to count to ${billion} Billion.`
}

function resultbox6(billion){

  let dollarThicknessInFeet = 0.0043/12
  let pennyThicknessInFeet = 0.0598/12
  let pileHeightInFeet = billion*1e9 / dollarThicknessInFeet
  let pileHeightInMiles = pileHeightInFeet/5280
  let pileHeightInKm = pileHeightInMiles*1.60934
  let pennyPileHeightInFeet = billion*1e9 / pennyThicknessInFeet
  let pennyPileHeightInMiles = pennyPileHeightInFeet/5280
  let pennyPileHeightInKm = pennyPileHeightInMiles*1.60934

  resultBox[6].textContent = `If you stacked ${billion} Billion 1 dollar notes, it would equal ${formatNumber(Math.floor(pileHeightInKm))} Kilometers or ${formatNumber(Math.floor(pileHeightInMiles))} Miles high. If you stacked pennies instead, your pile would have to be ${formatNumber(Math.floor(pennyPileHeightInKm))} Kilometers or ${formatNumber(Math.floor(pennyPileHeightInMiles))} Miles high to equal ${billion} billion.`
}

function resultbox7(billion){

  let BrunoPerYear = 150270.1714285
  let BrunoPerBillion = (billion*1e9)/BrunoPerYear

  resultBox[7].textContent = `If you listened to Bruno Mars' “Billionaire” on repeat, even while sleeping, after ${formatNumber(Math.floor(BrunoPerBillion))} years, you would have listened to it ${billion} billion times`
}

function resultbox8(billion){
  const EarthCircumferenceInFeet = 24901*5280
  const SunCircumferenceInFeet = 2715396*5280
  let EarthWrap = (billion*1e9)/EarthCircumferenceInFeet
  let SunWrap = (billion*1e9)/SunCircumferenceInFeet

  resultBox[8].textContent = `A rope that's ${billion} billion feet long, would wrap around the earth ${formatNumber(Math.floor(EarthWrap))} times and around the sun ${Math.round(SunWrap * 100) / 100} times.`
}

function resultbox9(billion){

  const starsInUniverse = 1e12*2
  let billionPercent = (billion*1e9)/starsInUniverse*100

  resultBox[9].textContent = `${billion} billion is ${billionPercent}% of the stars in the observable universe.`
}



