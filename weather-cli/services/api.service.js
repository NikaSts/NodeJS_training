import axios from 'axios';
import https from 'https';
import { printError } from './log.service.js';
import { getKeyValue, STORAGE_KEY } from './storage.service.js';

export const getWeather = async (city) => {
	const token = await getKeyValue(STORAGE_KEY.token);
	if (!token) {
		throw new Error('No token found. Use -t [API KEY] to set it');
	}

	try {
		const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
			params: {
				q: city,
				appid: token,
				units: 'metric',
			}
		})
		return data;

	} catch (e) {
		if (e?.response?.status === 404) {
			printError('City name is wrong');
		}
		else if (e?.response?.status === 401) {
			printError('Token is wrong');
		}
		else {
			printError(e.message)
		}
	}
}
