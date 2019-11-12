const f = require('../if-07.js');

QUnit.test("ЗАДАЧА 07. S(x1, y1, x2, y2, x3, y3)", function(assert){
    assert.deepEqual(f(1, 2, 6, 2, 4, 6), 10, "Не выполнено f(1, 2, 6, 2, 4, 6) == 10")
    assert.deepEqual(f(0, 0, 6, 0, 0, 3), -1, "Не выполнено f(0, 0, 6, 0, 0, 3) == -1")
    assert.deepEqual(f(0, 0, 0, 0, 0, 0), -1, "Не выполнено f(0, 0, 0, 0, 0, 0) == -1")
});