import axios from 'axios';
import https from 'https';
import { getKeyValue, STORAGE_KEY } from './storage.service.js';

export const getWeather = async (city) => {
	const token = await getKeyValue(STORAGE_KEY.token);
	if (!token) {
		throw new Error('No token found. Use -t [API KEY] to set it');
	}

	const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
		params: {
			q: city,
			appid: token,
			units: 'metric',
		}
	})

	return data;
}
