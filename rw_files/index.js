// commonjs version

const fs = require('fs');
const path = require('path');

(async () => {
  let template = await fs.promises.readFile(path.join(__dirname, 'template.html'), 'utf8');

	const data = {
		title: 'My new file 2',
		body: 'I wrote this file to disk using node again'
	};

	for (const [key, val] of Object.entries(data)) {
		template = template.replace(`{${key}}`, val)
	}
	await fs.promises.writeFile(path.join(__dirname, './index-2.html'), template);
})();
