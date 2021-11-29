import { homedir } from 'os';
import { join, sep } from 'path';
import { promises, existsSync } from 'fs';

export const STORAGE_KEY = {
	token: 'token',
	city: 'city'
}
const filePath = join(homedir(), `weather-data.json`);

export const saveKeyValue = async (key, value) => {
	let data = {};

	if (doesFileExist(filePath)) {
		let file = await promises.readFile(filePath, 'utf-8');
		data = JSON.parse(file);
	}
	data[key] = value;

	await promises.writeFile(filePath, JSON.stringify(data));
}

export const getKeyValue = async (key) => {
	const file = await promises.readFile(filePath, 'utf-8');
	const data = JSON.parse(file);
	return data[key];

}

const doesFileExist = (filePath) => existsSync(filePath);
