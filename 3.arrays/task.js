function compareArrays(arr1, arr2) {
  let result = arr1.every((n, i) => n === arr2[i] && arr1.length === arr2.length)
    
  return result; // boolean
}

//console.log(compareArrays([8, 9], [6])) // false, разные значения
//console. log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])) // false, разные значения
//console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])) // false, разные значения
//console.log(compareArrays([1, 2, 3], [2, 3, 1])) // false, разные индексы, хотя и одинаковые значения
//console.log(compareArrays([8, 1, 2], [8, 1, 2])) // true

function advancedFilter(arr) {
  let resultArr = arr.filter((arr) => arr % 3 === 0 && arr > 0).map((arr) => arr * 10);
  
  return resultArr; // array
}

//console.log(advancedFilter([-10, 12, -12, -3]))
//console.log(advancedFilter([-6, 6, -21, 21]))
//console.log(advancedFilter([0, 11, -0, 12]))
