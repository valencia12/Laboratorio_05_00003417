var bin = function(n){
    var acu;
    
    while(n>=2){
        acu=(n%2) + acu;
        n = Math.trunc(n/2);

    }
    acu = n + acu;
    return acu;
}