const [X4, Y4] = require('../if-14.js');

QUnit.test("������ 14. �������� ��� ������� X4(x1,y1,x2,y2,x3,y3) � Y4(x1,y1,x2,y2,x3,y3), ������� ���� �������� � �������� �������� �������.", function(assert){
	assert.deepEqual(X4(4,1,4,3,8,3), 8, "�� ���������")
	assert.deepEqual(Y4(4,1,4,3,8,3), 1, "�� ���������")
	
	assert.deepEqual(X4(1,1,4,4,7,1), 4, "�� ���������")
	assert.deepEqual(Y4(1,1,4,4,7,1), -2, "�� ���������")

	assert.deepEqual(X4(-4,-1,-4,-3,-8,-3), -8, "�� ���������")
	assert.deepEqual(Y4(-4,-1,-4,-3,-8,-3), -1, "�� ���������")
});