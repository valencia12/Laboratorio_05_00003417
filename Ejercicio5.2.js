
var Ordenamiento = function(){
    var   acu;
    for(i=0; i<array.length-1; i++){
        for (j=1; j< array.length; j++){
            if(array[i] > array[j]){
                acu= array[j];
                array[j] = array[i];
                array[i] = acu;
            }
        }
    }
return array;
}