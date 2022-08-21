var kitnapaisahai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
var count_crorephati=0
var count_lackpathi=0
var count_dilvale=0
for(var i of kitnapaisahai){
    if(i>=10000000){
        count_crorephati+=1
    }else if(i>=100000){
        count_lackpathi+=1
    }else{
        count_dilvale+=1
    }
}console.log("count_crorephati",count_crorephati)
console.log("count_lackpathi",count_lackpathi)
console.log("count_dilvale",count_dilvale)