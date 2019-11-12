const digitName = require('../if-12.js');

QUnit.test("������ 12. �������� ������� digitName(n), ������� ��������� n ���������� ���������� �������� ��������������� ����� �� 0 �� 9 ���������� �������, ���� ERROR", function(assert){
	assert.deepEqual(digitName(0), "ZERO", "�� ���������")
	assert.deepEqual(digitName(1), "ONE", "�� ���������")
	assert.deepEqual(digitName(9), "NINE", "�� ���������")
	assert.deepEqual(digitName(-1), "ERROR", "�� ���������")
	assert.deepEqual(digitName(10), "ERROR", "�� ���������")
});
