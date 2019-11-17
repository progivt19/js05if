const digitNAME = require('../if-12.js');

QUnit.test("ЗАДАЧА 12. ( Использоватьswitch/case.Массивы,операторыifнеиспользовать.) Написать функцию digitName(n), которая принимает n и возвращает английское название соответствующей цифры от 0 до 9 заглавными буквами (ZERO,ONE,…), либо ERROR, если число n меньше 0 или больше 9", 
  function(assert){
	assert.deepEqual(digitNAME(-56), 'ERROR', "Не выполнено digitNAME(-56) === ERROR");
	assert.deepEqual(digitNAME(18), 'ERROR', "Не выполнено digitNAME(18) === ERROR");
	assert.deepEqual(digitNAME(-5), 'ERROR', "Не выполнено digitNAME(-5) === ERROR");
	assert.deepEqual(digitNAME(0), 'ZERO', "Не выполнено digitNAME(0) === ZERO");
	assert.deepEqual(digitNAME(7), 'SEVEN', "Не выполнено digitNAME(7) === SEVEN");
	assert.deepEqual(digitNAME(10), 'ERROR', "Не выполнено digitNAME(10) === ERROR");
	assert.deepEqual(digitNAME(1), 'ONE', "Не выполнено digitNAME(1) === ONE");
  }
);
