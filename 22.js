var mainStr = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
var subStr = "over"
var k=mainStr.split(" ")
var m=" "
for(var j of k){
    if(j===subStr){
        continue
    }m=m+j+" "
}console.log(m)