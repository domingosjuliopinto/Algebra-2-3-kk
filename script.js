function randomNumber(maxi, mini) {
    return Math.floor(Math.random()*(maxi-mini+1)+mini);
}

// Generating question for Multiplying 2 3-Digit Numbers
a = randomNumber(999,100)
b = randomNumber(999,100)
ans = a*b

document.getElementById("num1").innerHTML = a;
document.getElementById("num2").innerHTML = b;

console.log(a);
console.log(b);
console.log(ans);

// Generating question for finding Square-root of a number from 1 to 100
c = randomNumber(100,1)
document.getElementById("num3").innerHTML = c*c;

console.log(c);

// Generating question for finding Cube-root of a number from 1 to 100
d = randomNumber(100,1)
document.getElementById("num4").innerHTML = d*d*d;

console.log(d);

// To show answer for multiplication problem
function correctmul(){
    var ans1 = document.getElementById("usermulans").value
    if (ans == ans1){
        var element = document.getElementById("form1");
        element.style.display = "none";
        document.getElementById("wrongalert1").innerHTML="= "+ ans + "<br><br>Correct Answer";
    }else{
        document.getElementById("wrongalert1").innerHTML="Wrong";
    }
}

// To show answer for square root problem
function correctsq(){
    var ans2 = document.getElementById("usersqans").value
    if (c == ans2){
        var element = document.getElementById("form2");
        element.style.display = "none";
        document.getElementById("wrongalert2").innerHTML="= "+ c + "<br><br>Correct Answer";
    }else{
        document.getElementById("wrongalert2").innerHTML="Wrong";
    }
}

// To show answer for cube root problem
function correctcub(){
    var ans3 = document.getElementById("usercubans").value
    if (d == ans3){
        var element = document.getElementById("form3");
        element.style.display = "none";
        document.getElementById("wrongalert3").innerHTML="= "+ d + "<br><br>Correct Answer";
    }else{
        document.getElementById("wrongalert3").innerHTML="Wrong";
    }
}