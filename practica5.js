var palindrome = function (cad){
 var k;
   var a = cad.split("");
  var b = a.reverse();
   console.log(a);
   console.log(b);
for (i=0; i < a.length; i++){
    for(j=0; j < b.length; j++){
        if (a[i] == b[j]) {
             return true;
             
        }else{
            return false;
            
        }
    }
}
}

