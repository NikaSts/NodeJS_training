const crypto = require(`crypto`);
const https = require('https');

const start = performance.now();

process.env.UV_THREADPOLL_SIZE = 4;

// for (let i = 0; i < 12; i++) {
// 	crypto.pbkdf2('test', 'salt', 100000, 64, 'sha512', () => {
// 		console.log(performance.now() - start);
// 	})
// }

for (let i = 0; i < 12; i++) {
	https.get('https://yandex.ru', (res) => {
		res.on('data', () => { });
		res.on('end', () => {
			console.log(performance.now() - start);
		})
	})
}
