
let f = require('./if-10.js');
if (f == require('./if-00.js')) {
	console.log(f(3,6,3));
} else if (f == require('./if-03.js')) {
	console.log(f(1,6,3,4));
} else if (f == require('./if-08.js')) {
	console.log(f(1,1,5,1,5,4));
} else if (f == require('./if-10.js')) {
	console.log(f(11));
} else if (f == require('./if-14.js')) {
	console.log(f(1,1,1,1,1,1));
}

