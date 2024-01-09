function prime(a){
    var count = 0
    for(var i = 1; i<= a;i++){
        if(a % i == 0){
            count++ 
        }
    }
    if(count == 2){
        console.log("PRIME No")
    }
    else{
        console.log("Not a prime No")
    }
}