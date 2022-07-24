// Function for calculating grades
const calculate = () => {

// Getting input from user into height variable.
let chemistry = document.querySelector("#chemistry").value;
let urdu = document.querySelector("#urdu").value;
let maths = document.querySelector("#maths").value;
let phy = document.querySelector("#phy").value;
let grades = "";

// Input is string so typecasting is necessary. */
let totalgrades =
	parseFloat(chemistry) +
	parseFloat(urdu) +
	parseFloat(maths) +
	parseFloat(phy);
   
// Checking the condition for the providing the
// grade to student based on percentage
let percentage = (totalgrades / 400) * 100;
if (percentage <= 100 && percentage >= 80) {
	grades = "A";
}  else if (percentage <= 79 && percentage >= 60) {
	grades = "B";
}  else if (percentage <= 59 && percentage >= 40) {
	grades = "C";
} else {
	grades = "F";
}
// Checking the values are empty if empty than
// show please fill them


if (chemistry == "" || urdu == ""
			|| maths == "" || phy == "") {
	document.querySelector("#showdata").innerHTML
		= "Please enter all the fields";
}



else {

    if (chemistry>100){
        document.querySelector("#showdata").innerHTML=("Be in your limit  ");
    }
    else if (urdu>100){
        document.querySelector("#showdata").innerHTML=("Be in your limit  ");
    }
    else if (maths>100){
        document.querySelector("#showdata").innerHTML=("Be in your limit  ");
    }
    else if (phy>100){
        document.querySelector("#showdata").innerHTML=("Be in your limit  ");
    }
	// Checking the condition for the fail and pass
	else if (percentage >= 39.5) {
	document.querySelector(
		"#showdata"
	).innerHTML =
		` Out of 400 your total is ${totalgrades}
		and percentage is ${percentage}%. <br>
		Your grade is ${grades}. You are Pass. `;
	} else {
	document.querySelector(
		"#showdata"
	).innerHTML =
		` Out of 400 your total is ${totalgrades}
		and percentage is ${percentage}%. <br>
		Your grade is ${grades}. You are Fail. `;
	}
}
};
