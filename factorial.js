function factorial(num) {
    // Base case
    if (num === 0) {
      return 1;
    }
    // Recursive case
    return num * factorial(num - 1);
  }
  
  console.log(factorial(5)); // Output: 120