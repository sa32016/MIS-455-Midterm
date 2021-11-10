function show(){
    var name = document.getElementById("namebox").value ;
    var age = document.getElementById("agebox").value;
    var sal = document.getElementById("salbox").value ;

    
    if ((age > 25) && (sal>=100000)){
        document.getElementById("i1").innerHTML = name + " Your monthly Bonus is 20% of total Monthly Salary";
    }
    
    else if((age > 30) && (sal>=200000)){
        document.getElementById("i1").innerHTML = name + " Monthly Bonus is 30% of total Monthly Salary";
    }

    else if((age > 35) && (sal>=300000)){
        document.getElementById("i1").innerHTML = name + "Monthly Bonus is 40% of total Monthly Salary";
    }

    else {
        document.getElementById("i1").innerHTML = name + "Monthly Bonus is 10% of total Monthly Salary";
    }


    document.getElementById("namebox").innerHTML = '';
    document.getElementById("agebox").innerHTML = '';
    document.getElementById("salbox").innerHTML = '';