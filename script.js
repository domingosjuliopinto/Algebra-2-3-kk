function randomNumber(maxi, mini) {
    return Math.floor(Math.random()*(maxi-mini+1)+mini);
}

// Generating question for Multiplying 2 3-Digit Numbers
a = randomNumber(999,100)
b = randomNumber(999,100)
ans = a*b

document.getElementById("num1").innerHTML = a;
document.getElementById("num2").innerHTML = b;
document.getElementById("num1x2").innerHTML = ans;

console.log(a);
console.log(b);
console.log(ans);

// Generating question for finding Square-root of a number from 1 to 100
c = randomNumber(100,1)
document.getElementById("num3").innerHTML = c*c;
document.getElementById("sqr").innerHTML = c;

console.log(c);

// Generating question for finding Cube-root of a number from 1 to 100
d = randomNumber(100,1)
document.getElementById("num4").innerHTML = d*d*d;
document.getElementById("cbr").innerHTML = d;

console.log(d);
