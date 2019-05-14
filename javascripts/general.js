var currentDayAsNumber = new Date();

var daysAsWords = new Array(7);

daysAsWords[0] =  "Sunday";
daysAsWords[1] = "Monday";
daysAsWords[2] = "Tuesday";
daysAsWords[3] = "Wednesday";
daysAsWords[4] = "Thursday";
daysAsWords[5] = "Friday";
daysAsWords[6] = "Saturday";

var currentDayAsWord = daysAsWords[currentDayAsNumber.getDay()];

function renderCurrentDay() {
  document.getElementById("today").innerHTML = currentDayAsWord;
};
