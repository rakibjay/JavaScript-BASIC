// Together its object and individually this all are object property
let carBrand = "Audi";
let carColor = "Yellow";
let carModel = "A4";
let carPrice = "45000";

// FORMULA : Making a object 
// { } this represnt as a object and its name (object literal syntex)
/**
 * let object = {
    key : "value"
        };
console.log(object);
 */


/**     we can access the object specific key's value with 2(TWO) way :
 *      1   .(dot) notation
 *      2   [' '] notation
 *      this 2 types of way explain with example ::
 * 
 *      1   .(dot) notation Example : 
 */
        let car1 = {
            brand : "Audi",
            color : " Yellow"
        };
        
        console.log(car1.brand);

/**
 *      2   [' '] notation example :
 */

        let car2 = {
            model : "A4",
            Price : "45000"
        };

        console.log(car2['model']);

/**
 *      when we will use [' '] Notation and .(dot) Notation ?
 */
        // when we will work with dynamically assign to the key, then we have to use this [' '] Notation object formula
        // when we use dynamically then write down "selectedOption"
        // For Example ::
        let car3 = {
            gear : "Auto",
            oil : "Petrol"
        };

        let selectedOption = "gear";
        console.log(car3[selectedOption]);
        
        // when we will work with key, which means we know the key, then we have to use this .(dot) Notation object formula
        // For Example ::
        let car4 = {
            frontCamera : "Ordinary Camera 2.0",
            backCamera : "GoPro3"
        };

        console.log(car4.frontCamera);

