//jk means unique k nen pettukunna sort cut lo jk
var n = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
var jk=[]
var duplicate=[]
for(var i of n){
    if(!jk.includes(i)){
        jk.push(i)
    }
}
for (var j of jk){
    var count=0
    for(var k of n){
        if(j===k){
            count+=1
        }
    }
    if(count>1){
        duplicate.push(j)
    }
}
console.log(duplicate)