var Section = prompt("Enter Section")

if( Section == "Science" || Section == "Medical Science"){
    var Math = +prompt("Math Marks");
    var Physics = +prompt("Physics Marks");
    var Computer = +prompt("Computer Marks");
    var English = +prompt("English Marks");
    var Urdu = +prompt("Urdu Marks");

    var TotalMarks= Math+Physics+Computer+English+Urdu;
    
    alert("Your Percentage Is "+ (TotalMarks/500)*100+"%")
}
else{
    alert("Wrong Section")
}