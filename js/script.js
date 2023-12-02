// method01

// var n = parseInt(prompt("Enter your desired number: "));

// var sum = 0;
// var output = "";

// for (var i = 1; i <= n; i++) {
//     var squared = i ** 2;
//     output += squared;
//     if (i < n) {
//         output += " + ";
//     } else {
//         output += " = ";
//     }
//     sum += squared;
// }

// console.log(output + sum);

// method02

var n = parseInt(prompt("Enter your desired number: "));
var sum = 0;
var output = "";

for (var i = 1; i <= n; i++){
    sum += i*i;
    output += (i*i).toString();
    // console.log (output);
    if (i==n){
        continue
    }
    output += " + ";
}

console.log(`${output} = ${sum}`)
