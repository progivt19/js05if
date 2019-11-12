const f = require('../if-10.js');

QUnit.test("ЗАДАЧА 10. f(n)=Месяц", 
  function(assert){
	assert.deepEqual(f(11), "Ноябрь", "Не выполнено f(11) === Ноябрь");
	assert.deepEqual(f(2), "Февраль", "Не выполнено f(2) === Февраль");
	assert.deepEqual(f(5), "Май", "Не выполнено f(5) === Май");
  }
);
