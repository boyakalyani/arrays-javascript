var  numbers=[50, 40, 23, 70, 56, 12, 195, 10, 90,101,122]
// count=0
//  for(var i=0;i<numbers.length;i++){
//      if(numbers[i]>count){
//     count=numbers[i]
//     console.log(count)
//  }
//  }



// k=0
// numbers.forEach((numbers)=>{
//     if(k<numbers){
//         k=numbers
//     }
// })
// console.log(`the largest maximun numbers is: ${k}`)

max=0
for(var i=0;i<numbers.length;i++){
    if(max<numbers[i]){
        max=numbers[i]
    }
}console.log(max)

