// my array
var numArray = [7,3,1,90,11,487,6437,398,88,777];

//function to bubble sort the numbers from least to greatest
function bubbleSort(numArray){
    var swappedNums;
    do {
        swappedNums = false;
        for (var i = 0; i < numArray.length-1; i++) {
            if (numArray[i] > numArray[i+1]) {
                var temp = numArray[i];
                numArray[i] = numArray[i+1];
                numArray[i+1] = temp;
                swappedNums = true;
            }
        }
    } while (swappedNums);
}

bubbleSort(numArray);
console.log(numArray);