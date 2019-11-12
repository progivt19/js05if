//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function x4(x1,y1,x2,y2,x3,y3){
R1=(x1-x2)*(x1-x2)+(y1-y2)*(y1-y2);
R2=(x2-x3)*(x2-x3)+(y2-y3)*(y2-y3);
R3=(x1-x3)*(x1-x3)+(y1-y3)*(y1-y3);
Answer =0;
if ((R1>R2)&&(R1>R3)){
	Answer = x1-(x3-x2);
}
if ((R2>R1)&&(R2>R3)){
	Answer = x2-(x1-x3);
}
if ((R3>R1)&&(R3>R2)){
	Answer = x3-(x2-x1);
}
return Answer;
}

function y4(x1,y1,x2,y2,x3,y3){
R1=(x1-x2)*(x1-x2)+(y1-y2)*(y1-y2);
R2=(x2-x3)*(x2-x3)+(y2-y3)*(y2-y3);
R3=(x1-x3)*(x1-x3)+(y1-y3)*(y1-y3);
Answer1 =0;
if ((R1>R2)&&(R1>R3)){
	Answer1 = y1-(y3-y2);
}
if ((R2>R1)&&(R2>R3)){
	Answer1 = y2-(y1-y3);
}
if ((R3>R1)&&(R3>R2)){
	Answer1 = y3-(y2-y1);
}
return Answer1;
}

module.exports = {x4,y4};