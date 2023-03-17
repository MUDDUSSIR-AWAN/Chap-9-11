
do {
    var obatinedMarks = +prompt("Please Enter your Obtained marks in three subjects:");

    var totalMarks = +prompt("Please Enter your Total marks in three subjects:");

    var percentage = (obatinedMarks / totalMarks) * 100;

    if (obatinedMarks <= totalMarks && obatinedMarks >= 0) {
        console.log("%cPercentage", "font-weight: bold;");

        console.log("Total Marks : " + totalMarks);

        console.log("Marks obtained : " + obatinedMarks);

        console.log("Percentage : " + percentage.toFixed(2) + ("%"));

        if (percentage.toFixed(0) >= 80) {
            console.log("Grade :  A-one");
            console.log("Remarks : Exellent");
        }
        else if (percentage.toFixed(0) >= 70) {
            console.log("Grade :  A");
            console.log("Remarks : Good");
        }
        else if (percentage.toFixed(0) >= 60) {
            console.log("Grade :  B");
            console.log("Remarks : You need to improve");
        }
        else {
            console.log("Grade :  Fail");
            console.log("Remarks : Sorry");
        }
    }
    else if (obatinedMarks < 0) {
        alert("Please Enter a positive number");
    }

    else if (obatinedMarks > totalMarks) {
        alert("Total Marks should be greater than Obtained Marks");
    }
}
while (obatinedMarks > totalMarks || obatinedMarks < 0);