var male = ["Kwasi","Kwadwo","Kwabena"," Kwaku","Yaw","Kofi","Kwame"];
var female = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

submit.onclick = function() {
    var month = parseFloat(document.getElementById("month").value);
    var day = parseFloat(document.getElementById("day").value);
    var year = parseFloat(document.getElementById("year").value);
    var century = (year / 100) + (year % 100 != 0 ? 1 : 0);
    console.log(century)

    if (month > 0 && month <= 12 && day > 0 && day <= 31) {
        // return Math.ceil(year/100);
        document.getElementById("output-month").innerText = month;
        document.getElementById("output-day").innerText = day;
        document.getElementById("output-year").innerText = year;
        document.getElementById("output-century").innerText = century;
    }
    else {
        document.getElementById("output").innerText = "Invalid data";
        document.getElementsByClassName("output-again").innerText = "Invalid data";
    }
    var dayOfWeek = ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7;
    var done = Math.round(dayOfWeek);
    document.getElementById("idnbr").innerText = done;

    document.getElementById("given-name").innerHTML = male[done];
    document.getElementById("given-name").innerHTML = female[done];
    document.getElementById("given-name-again").innerHTML = male[done];
    document.getElementById("given-name-again").innerHTML = female[done];

    var name = document.getElementsByName('gender');
    for(i = 0; i < name.length; i++) {
        if(name[i].checked) {

        document.getElementById("fm").innerHTML = name[i].value;
        }
    }

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    document.getElementById("first").innerText= fname;
    document.getElementById("last").innerText = lname;

}
