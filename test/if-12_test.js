const f = require('../if-12.js');

QUnit.test("ЗАДАЧА 012. digitName(int n)", function(assert){
    assert.deepEqual(f(0), "ZERO", "Не выполнено f(0) == ZERO")
    assert.deepEqual(f(1), "ONE", "Не выполнено f(1) == ONE")
    assert.deepEqual(f(2), "TWO", "Не выполнено f(2) == TWO")
    assert.deepEqual(f(3), "THREE", "Не выполнено f(3) == THREE")
    assert.deepEqual(f(4), "FOUR", "Не выполнено f(4) == FOUR")
    assert.deepEqual(f(5), "FIVE", "Не выполнено f(5) == FIVE")
    assert.deepEqual(f(6), "SIX", "Не выполнено f(6) == SIX")
    assert.deepEqual(f(7), "SEVEN", "Не выполнено f(7) == SEVEN")
    assert.deepEqual(f(8), "EIGHT", "Не выполнено f(8) == EIGHT")
    assert.deepEqual(f(9), "NINE", "Не выполнено f(9) == NINE")
    assert.deepEqual(f(12), "ERROR", "Не выполнено f(12) == ERROR")
    assert.deepEqual(f(-3), "ERROR", "Не выполнено f(-3) == ERROR")
});