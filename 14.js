var number=[]
var n=30
var k=[10, 11, 12, 13, 14, 17, 18, 19]
for(var i of k){
    for(var j of k){
        if(i+j===n){
            number.push([i,j])
        }
    }
}console.log(number)