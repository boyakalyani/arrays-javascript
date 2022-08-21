var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var even=0
var odd=0
for(var i of elements){
    if(i%2===0){
        even=even+1
    }
    else{
        odd=odd+1
    }
}
console.log(even,"even")
console.log(odd,"odd")