const f = require('../if-02.js');

QUnit.test("ЗАДАЧА 02. f(a, b, c, d) = max(min(a,b), min(c,d))", function(assert){
    assert.deepEqual(f( 1, 1, 1, 1), 1, "Не выполнено f( 1, 1, 1, 1) == 1")
    assert.deepEqual(f( 5, 6, 2, 3), 5, "Не выполнено f( 5, 6, 2, 3) == 5")
    assert.deepEqual(f( 4, 8, 9, 3), 4, "Не выполнено f( 4, 8, 9, 3) == 4")   
    assert.deepEqual(f( 5, 7, 5, 3), 5, "Не выполнено f( 5, 7, 5, 3) == 5")   
});