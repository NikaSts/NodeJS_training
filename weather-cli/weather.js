#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printError, printHelp, printSuccess } from './services/log.service.js';
import { saveKeyValue, STORAGE_KEY } from './services/storage.service.js';

const saveToken = async (token) => {
	try {
		if (!token.length) {
			throw new Error('no token provided')
		}

		await saveKeyValue(STORAGE_KEY.token, token);
		printSuccess('Token was successfully saved');
	} catch (e) {
		printError(e.message);
	}
}

const initCLI = () => {
	const args = getArgs();

	if (args.h) {
		printHelp();
	};
	if (args.s) {
		console.log(args.s);
	}
	if (args.t) {
		return saveToken(args.t)
	}

	getWeather('Rome,it');
}


initCLI();
