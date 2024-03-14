// function calPoints(ops){
//      let stack = [];

//     for(op in ops){
//         if (op == 'C')
//         {
//          stack.pop();
//         }
//         else if (op == 'D')
//         {    
//          stack.push(stack[-1] * 2)}
//         else if (op == '+')
//         {
//          stack.push(stack[-1] + stack[-2])}
//         else{
//             stack.push( op);
//         }
//     }
//     return stack.reduce((a,b) => a+b,0)
   
// }
// //# Test the function

// console.log(calPoints(ops= ["5", "2", "C", "D", "+"])) ;
//   //# Output: 30

function calPoints(ops) {
    var stack = [];

    for (var i = 0; i < ops.length; i++) {
        var op = ops[i];

        if (op === 'C') {
            stack.pop();
        } else if (op === 'D') {
            stack.push(2 * stack[stack.length - 1]);
        } else if (op === '+') {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        } else {
            stack.push(parseInt(op));
        }
    }

    var sum = 0;
    for (var j = 0; j < stack.length; j++) {
        sum += stack[j];
    }

    return sum;
}
var ops = ["5", "-2", "4", "C", "D", "9", "+", "+"];
console.log(calPoints(ops)); // Output: 27
var ops = ["5", "2", "C", "D", "+"];
console.log(calPoints(ops)); // Output: 30
var ops =["1"];
console.log(calPoints(ops)); // Output :1