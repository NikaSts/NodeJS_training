#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printError, printHelp, printSuccess } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';

const saveToken = async (token) => {
	try {
		if (!token.length) {
			throw new Error('no token provided')
		}

		await saveKeyValue('token', token);
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
}


initCLI();
