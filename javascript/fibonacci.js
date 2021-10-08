function fibonacci(num) {

  if (num < 2) {
    return num;
  }

  const sequence = [0, 1];

  for (let i = 2; i <= num; i++) {
    const seqLength = sequence.length;
    sequence.push(sequence[seqLength -1] + sequence[seqLength -2]);
  }

  return sequence.pop();

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("");

  console.log("Expecting: 89");
  console.log("=>", fibonacci(11));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
/*

Find the "x"nth element in the Fibonaci series

Fibonacci sequence starts with 0, followed by a 1. All numbers after are the sum of the 2 numbers preceeding it in the sequence.

0 1 2 3 4 5 6 7  8  9  10 11 <--- Using zero-indexing
0 1 1 2 3 5 8 13 21 34 55 89 etc etc
    ^ ^ ^
0+1=1 ^ ^
  1+1=2 ^
    1+2=3

  if....
  6
  build fib sequence till 5th index
  
  create array with [0,1]

    check (if array.length === num+1) return array[num]

    0+1 = 1, push to array

    [0,1,1]

    1+1 = 2, push to array

    [0,1,1,2]

    1+2 = 3, push to array

    [0,1,1,2,3]

    2+3 = 5, push to array

    [0,1,1,2,3,5]


  function called fibonacci takes integer "num"

    if number is less than 2
      return num

    create array called sequence with [0, 1] (first two numbers of sequence)

    





*/