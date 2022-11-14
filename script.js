// Generating question for Multiplying 2 3-Digit Numbers
a = Math.floor(Math.random()*(999-100+1)+100)
b = Math.floor(Math.random()*(999-100+1)+100)

document.getElementById("num1").innerHTML = a;
document.getElementById("num2").innerHTML = b;
//console.log(a)
//console.log(b)

// Generating question for finding Square-root of a number from 1 to 100
c = Math.floor(Math.random()*(100-1+1)+1)
document.getElementById("num3").innerHTML = c*c;
//console.log(c)

// Generating question for finding Cube-root of a number from 1 to 100
d = Math.floor(Math.random()*(100-1+1)+1)
document.getElementById("num4").innerHTML = d*d*d;
//console.log(d)