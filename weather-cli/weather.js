#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printError, printHelp, printSuccess, printWeather } from './services/log.service.js';
import { getKeyValue, saveKeyValue, STORAGE_KEY } from './services/storage.service.js';

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

const saveCity = async (city) => {
	try {
		if (!city.length) {
			throw new Error('no city provided')
		}

		await saveKeyValue(STORAGE_KEY.city, city);
		printSuccess('City was successfully saved');
	} catch (e) {
		printError(e.message);
	}
}

const getForecast = async (city) => {
	city = city || await getKeyValue(STORAGE_KEY.city);
	if (city) {
		const weather = await getWeather(city);
		printWeather(weather);
	}
	else {
		printError('No city found');
		printHelp();
	}
}

const initCLI = () => {
	const args = getArgs();

	if (args.h) {
		return printHelp();
	}
	if (args.s) {
		return saveCity(args.s);
	}
	if (args.t) {
		return saveToken(args.t)
	}

	const city = args['_'][0]

	getForecast(city);
}


initCLI();
