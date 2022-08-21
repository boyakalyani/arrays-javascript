var k=require("readline-sync").question("enter the number or string:-")
const j=k
let l=""
for(var i=k.length-1;i>=0;i--){
    l=l+k[i]
}if(j===l){
    console.log("its a palindram string or number",k)
}else{ 
    console.log("its not a palindram",k)
}




