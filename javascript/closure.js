function outerFunction(x) {
    let innerVar = 4;
  
    function innerFunction() {
      return innerVar;
    }
  
    return innerFunction;
  }
  
  const closur = outerFunction(2);
  console.log(closure()); 




//   que 2
function outerFunction(x) {
    let innerVar = 4;
  
    function innerFunction() {
      return x + innerVar;
    }
  
    return innerFunction;
  }
  
  const closure = outerFunction(2);
  console.log(closure()); // Output: 6
const counter = createCounter();

console.log(counter.increment()); // Output: 1;

console.log(counter.increment()); // Output: 2;

console.log(counter.getCount()); // Output: 2;