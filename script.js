const months = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

function ageCalculate(){
    let today = new Date();
    let birthMonth, birthDate, birthYear;

    //Input Date
    let inputDate = new Date(document.getElementById("date-input").value);

    let birthDetails = {
        date:inputDate.getDate(),
        month:inputDate.getMonth()+1,
        year:inputDate.getFullYear()
    }
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth()+1;
    let currentDate = today.getDate();

    leapChecker(currentYear);

    //Date check!
    if (birthDetails.year > currentYear || 
        (birthDetails.month > currentMonth && birthDetails.year == currentYear) ||
        (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentDate)){
            alert("Not born yet >:(");
            displayResult("-","-","-");
            return;
    }

    //Ager calculator!
    birthYear = currentYear - birthDetails.year; //Year

    if (currentMonth >= birthDetails.month){ //Month
        birthMonth = currentMonth - birthDetails.month;
    } else {
        birthYear--;
        birthMonth = 12 + currentMonth - birthDetails.month;
    }

    if (currentDate >= birthDetails.date){
        birthDate = currentDate - birthDetails.date;
    } else {
        birthMonth--;
        let days = months[currentMonth - 2];
        birthDate = days + currentDate - birthDetails.date;
        if (birthMonth < 0){
            birthMonth = 11;
            birthYear--;
        }
    }

    // console.log(birthYear, birthMonth, birthDate); //Let see...

    displayResult(birthDate, birthMonth, birthYear);
}

//Año viciesto
function leapChecker(year){
    if (year % 4 == 0 || (year % 100 && year % 400 == 0)){
        months[1] = 29;
    } else {
        months[1] = 28;
    }
}

function displayResult(bDate, bMonth, bYear){
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDate;
}