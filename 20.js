var list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
var unique=[]
for(var i of list){
    if(!unique.includes(i)){
        unique.push(i)
    }
}console.log(unique)
for(var j of unique){
    var count=0
    for(var k of list){
        if(j===k){
            count+=1
        }
    }console.log(j,count,"times")
}