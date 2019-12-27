const h = require('../if-05.js');

QUnit.test("ЗАДАЧА 05. Написать функцию h(a,b,c) ,которая дает длину высоты, опущенной на сторону a, в треугольнике со сторонами a, b, c, если такой треугольник существует, и дает -1 в противном случае."
  function(assert){
	assert.deepEqual(h(1, 2, 3), -1, "Не выполнено h(1, 2, 3) === -1")
	assert.deepEqual(h(5, 4, 3), 2, "Не выполнено h(5, 4, 3) === 2")
	assert.deepEqual(h(4, 9, 6), 5, "Не выполнено h(4, 9, 6) === 5")
	assert.deepEqual(h(3, 2, 5), -1, "Не выполнено h(3, 2, 5) === -1")
	assert.deepEqual(h(15, 7, 10), 4, "Не выполнено h(15, 7, 10) === 4")
	assert.deepEqual(h(18, 10, 23), 10, "Не выполнено h(18, 10, 23) === 10")

});
