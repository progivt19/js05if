function f(n){
switch(n)
{
	case 0 :
	f =("zero");
	break;
	case 1 :
	f =("one");
	break;
	case 2 :
	f =("two");
	break;
	case 3 :
	f =("three");
	break;
	case 4 :
	f =("four");
	break;
	case 5 :
	f =("five");
	break;
	case 6 :
	f =("six");
	break;
	case 7 :
	f =("seven");
	break;
	case 8 :
	f =("eight");
	break;
	case 9 :
	f =("nine");
	break;
	default:
	f=("Error");
}
return f;
}

module.exports = f ;