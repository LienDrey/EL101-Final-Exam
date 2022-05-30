function calculator() {
	var num1 = 10;
	var num2 = 8;
	var d = "Multiplication";

	if(d === "multiplication"){
		return num1 * num2;
	}
	else if(d === "division" ){
		return num1 / num2;
	}
	else if(d === "addition") {
		return num1 + num2;
	}
	else if (d === "substruction"){
		return num1 - num2;
	}
	else{
		console.log("");
	}
}
calculator();
