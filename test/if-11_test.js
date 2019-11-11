const WeekdayName = require('../if-11.js');

QUnit.test("Задача 11. WeekdayName(n)", 
	function(assert){
		assert.deepEqual( WeekdayName(1), "Monday", "Не выполнено WeekdayName(1) === Monday");
		assert.deepEqual( WeekdayName(2), "Tuesday", "Не выполнено WeekdayName(2) === Tuesday");
		assert.deepEqual( WeekdayName(3), "Wednesday", "Не выполнено WeekdayName(3) === Wednesday");
		assert.deepEqual( WeekdayName(4), "Thursday", "Не выполнено WeekdayName(4) === Thursday");
		assert.deepEqual( WeekdayName(5), "Friday", "Не выполнено WeekdayName(5) === Friday");
		assert.deepEqual( WeekdayName(6), "Saturday", "Не выполнено WeekdayName(6) === Saturday");
		assert.deepEqual( WeekdayName(7), "Sunday", "Не выполнено WeekdayName(7) === Sunday");
	}
);	
			