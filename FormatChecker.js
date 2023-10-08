var $ = function (id) {
    return document.getElementById(id);
};
            
window.onload = function() {
    $("btnCalc").onclick = fnCalculate; // ID needs to be updated
    //$("btnClr").onclick = fnClear; // Optional clear button
    $("StudentNo").focus();
 };

window.onerror = function(a,b,c,d) {
    alert(a + "\n" + b + "\n" + c + "\n" + d);
    return false;
};

function fnClear() { // Optional clear function
    $("form1").reset(); // ID needs to be updated
    $("results").innerHTML = ""; // ID needs to be updated
    $("StudentNo").focus();
};

function fnCalculate() {
    //alert("You are trying to calculate a student grade!"); // Checks if function runs
    var sno = $("StudentNo").value.trim(); // trim removes leading and trailing spaces
    if (sno === "") {
        alert("Student number is missing.");
        $("StudentNo").focus();
        return; // abort calculate
    }  else if (sno.substring(0,1) !== "A" ) {
        alert("Student number must start with a captital 'A'.");
        $("StudentNo").focus();
        return; // abort calculate
    }  else if (sno === "A00000000") {
        alert("Student number cannot be 'A00000000'.");
        $("StudentNo").focus();
        return; // abort calculate
    } else if ( (isNaN(sno.substring(1, 10))) || (sno.substring(1, 10).length !== 8) ) {
        alert("Student number must contain 8 digits.");
        $("StudentNo").focus();
        return; // abort calculate
    }
};