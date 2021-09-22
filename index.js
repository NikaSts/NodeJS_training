#!/usr/bin/env node
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const months= ["January","February","March","April","May","June","July", "August","September","October","November","December"];
const nowDate = new Date(Date.now());
const year = nowDate.getFullYear();
const month = months[nowDate.getMonth()];
const day = nowDate.getDate();
const time = nowDate.toLocaleTimeString();

let result = `The ${day} of ${month}, ${time}`;

if (Object.keys(argv).length > 2) {
	result = '';
	if (argv.date || argv.d) {
		result += `${day} `;
	}
	if (argv.month || argv.m) {
		result += `${month} `;
	}
	if (argv.year || argv.y) {
		result += `${year}`;
	}
}
console.log(result);
