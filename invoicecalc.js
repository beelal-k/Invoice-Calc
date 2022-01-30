function add_1(){

    var a = Number(document.getElementById("unit1").innerText);

    var b = Number(document.getElementById("qua1").innerText);
   
    var c= a * b;
    document.getElementById("answer1").innerHTML = c; 
   
}

function add_2(){

    var a = Number(document.getElementById("unit2").innerText);

    var b = Number(document.getElementById("qua2").innerText);
   
    var c= a * b;
    document.getElementById("answer2").innerHTML = c; 
   
}

function add_3(){

    var a = Number(document.getElementById("unit3").innerText);

    var b = Number(document.getElementById("qua3").innerText);
   
    var c= a * b;
    document.getElementById("answer3").innerHTML = c; 
   
}

function add_4(){

    var a = Number(document.getElementById("unit4").innerText);

    var b = Number(document.getElementById("qua4").innerText);
   
    var c= a * b;
    document.getElementById("answer4").innerHTML = c; 
   
}

function total(){

    var a,b,c,d, total;

    a = Number(document.getElementById("answer1").innerText);
    b = Number(document.getElementById("answer2").innerText);
    c = Number(document.getElementById("answer3").innerText);
    d = Number(document.getElementById("answer4").innerText);

    total = a + b +c + d;
    document.getElementById("total").innerHTML = total; 
    
}