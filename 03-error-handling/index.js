// function add(a, b) {
// 	if (typeof a !== 'string' || typeof b !== 'string') {
// 		throw new Error('Wrong type of data');
// 	}
// 	return a + b;
// }

// try {
// 	var result = add( 'a' , 1);
// } catch(error) {
// 	console.log(error);
// }


// console.log('Do something else!');

function reject() {
	return new Promise(function (resolve, reject) {
		reject(new Error('Promise Error'));
	});
}

reject().catch(function (error) {
	console.log('Chung ta co 1 error o day: ', error.message);
});