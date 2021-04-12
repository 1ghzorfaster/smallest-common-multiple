function smallestCommons(arr) {
  //Setup
  const min = Math.min.apply(Math, arr);
  const max = Math.max.apply(Math, arr);
  const divisor = max - min + 1;
  const range = [];

  //Create range
  for (let i = min; i <= max; i++) {
    range.push(i);
  } 
    
  //Create limit
  let limit = range.map(Number).reduce(function(product, value) { 
    return product * value; 
  })

  //Log key variables for testing
  console.log("Input: " + arr)
  console.log("Min: " + min + ", Max: " + max);
  console.log("Divisor: " + divisor)
  console.log("Range: " + range);
  console.log("Limit: " + limit);

  //Find smallest multiple
  for (let multiple = max; multiple <= limit; multiple += max) {
     let count = 0;
     for (let i = min; i <= max; i++) {
       if (multiple % i === 0) {
         count += 1;
       }
     }
     if (count === divisor) {
        return multiple;
     }
  }
}

//Test cases
console.log("Result: " + smallestCommons([5,1]));
console.log();
console.log(smallestCommons([2, 10]));
console.log();
console.log(smallestCommons([23, 18]));
