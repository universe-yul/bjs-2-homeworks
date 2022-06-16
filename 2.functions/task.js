// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    } 
  }

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  avg = +(sum / arr.length).toFixed(2);
  
  return { min: min, max: max, avg: avg };
}
 

//console.log(getArrayParams([-99, 99, 10]));
//console.log(getArrayParams([1, 2, 3, -100, 10]));
//console.log(getArrayParams([5]));

// Задание 2

  function worker(arr) {
  let sum;
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    
  }

  return sum;
}

//console.log(worker([1, 2, 3])); 


function makeWork(arrOfArr, worker) {
  let max = -Infinity;
   
  for (let i = 0; i < arrOfArr.length; i++) {
  let sumResult;
  sumResult=worker(arrOfArr[i]);
      
      if (sumResult > max) {
        max = sumResult;
     }
   }

  return max;
}

//console.log(makeWork([[10,10,20],[20,19,10]],worker));
//console.log(makeWork([[12,23,31],[41,5,61]],worker));
//console.log(makeWork([[14,21,36],[15,26,39]],worker));


// Задание 3
function worker2(arr) {
  let minResalt, maxResalt, sum, resalt;
  minResalt = Infinity;
  maxResalt = -Infinity;
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > maxResalt) {
      maxResalt = arr[i];
    }

    if (arr[i] < minResalt) {
      minResalt = arr[i];
    } 
  }

  resalt = +(maxResalt-minResalt).toFixed(2);
  
  return resalt;
}
//console.log(worker2([1, 2, 3]));
//console.log(makeWork([[10, 20, 30], [-40, -50, -65]],worker2));
//console.log(makeWork([[10, 10, 11], [20, 10]],worker2));
//console.log(makeWork([[0, 1, 2], [-1, -100]],worker2));
