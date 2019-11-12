const f = require('../if-14.js');

QUnit.test("ЗАДАЧА 014. X4(x1, y1, x2, y2, x3, y3) and Y4(x1, y1, x2, y2, x3, y3)", function(assert){
    assert.deepEqual(f(0, 0, 6, 0, 6, 4), "X = 0, Y = 4", "Не выполнено f(0, 0, 6, 0, 6, 4) == X = 0, Y = 4")
    assert.deepEqual(f(3, 0, 6, 3, 3, 6), "X = 0, Y = 3", "Не выполнено f(3, 0, 6, 3, 3, 6) == X = 0, Y = 3")
    assert.deepEqual(f(0, 0, 8, 0, 0, -3), "X = 8, Y = -3", "Не выполнено f(0, 0, 8, 0, 0, -3) == X = 8, Y = -3")
});