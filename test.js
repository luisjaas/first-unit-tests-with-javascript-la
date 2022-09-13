const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')
    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)
    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2;
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})
test("One dollar should be 106.58 yens", function(){
    const { fromDollarToYen } = require('./app')
    const yens = fromDollarToYen(4.2)
    const expected = 4.2 * 106.58;
    expect(fromDollarToYen(4.2)).toBe(447.636);
})
test("One yen should be 0.006 pounds", function(){
    const { fromYenToPound } = require('./app.js')
    const pounds = fromYenToPound(447.63)
    const expected = 447.636 * 0.006;
    expect(fromYenToPound(447.63)).toBe(2.68578);
})