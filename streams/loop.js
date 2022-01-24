const fs = require('fs');

// timer.unref();

// setImmediate(() => {
// 	timer.ref()
// })

console.log('Init');

setTimeout(() => {
	console.log(performance.now(), 'timer 0');
}, 100);

setImmediate(() => {
	console.log('after all');
});

fs.readFile(__filename, () => {console.log('file read')})

setTimeout(() => {
	for (let i = 0; i < 1000000000; i++) {

	}
	console.log(performance.now(), 'loop ended');
}, 0);

Promise.resolve().then(() => {
	console.log('promise');
})

process.nextTick(() => {
	console.log('tick');
})
console.log('End');
