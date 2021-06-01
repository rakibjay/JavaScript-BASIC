/**
 * always try to use imperative as like (order,prohibition) type meaning.
 * 
 * FORMULA ::
 * 
 *      function car1 (perameter1, perameter2) {
 *          let result = perameter1 + perameter2
 *          return result
 *      }         
 *      console.log(car1( value1, value2 ));
 * 
 * 
 * 
 * 
 *      funtion calculateSum (firstNumber, secondNumber) {
 *      let result = firstNumber + secondNumber
 *      return result
 *      };
 * 
 *      console.log(calculateSum (12,4));
 * 
 *      let sum = calculateSum(34,6);
 *      console.log('Sum: ' , sum + 2);  (if want to result reply with new value then use this method)
 */

function calculateSum (firstNumber, secondNumber) {
    let result = firstNumber + secondNumber
    return result;
}

    console.log(calculateSum (12,4));

    let sum = calculateSum(34,6);
    console.log("Sum: " , sum + 2);