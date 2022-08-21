var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
i=0
max=0
max2=0
for(var i =0;i<numbers.length;i++){
    if(max<numbers[i]){
        if(max2<max){
            max2=max
    }max=numbers[i]
    }else{
        if(max2<numbers[i]){
            max2=numbers[i]
        }
    }
}console.log(max2)