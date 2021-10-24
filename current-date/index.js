#!/usr/bin/env node

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const nowDate = new Date(Date.now());
const nowDay = nowDate.getDate();
const nowMonth = nowDate.getMonth();
const nowYear = nowDate.getFullYear();
const formatDate = (date) => {
	return `The ${date.getDate()} of ${months[date.getMonth()]} ${date.getFullYear()}, ${date.toLocaleTimeString()}`;
};
const setNewDate = (argv, dir) => {
	const { day, month, year } = argv;
	day && console.log(formatDate(new Date(nowDate.setDate(nowDay + day * dir))));
	month && console.log(formatDate(new Date(nowDate.setMonth(nowMonth + month * dir))));
	year && console.log(formatDate(new Date(nowDate.setFullYear(nowYear + year * dir))));
}
yargs(hideBin(process.argv))
	.options({
		day: {
			alias: "d",
			describe: "Get day",
		},
		month: {
			alias: "m",
			describe: "Get month",
		},
		year: {
			alias: "y",
			describe: "Get year",
		},
	})
	.command({
		command: "add",
		desc: "Incremet date",
		handler: (argv) => {
			setNewDate(argv, 1);
		}
	})
	.command({
		command: "sub",
		desc: "Decremet date",
		handler: (argv) => {
			setNewDate(argv, -1);
		},
	})
	.command({
		command: "$0",
		desc: "Show current date",
		handler: (argv) => {
			argv.day && console.log(nowDay);
			argv.month && console.log(months[nowMonth]);
			argv.year && console.log(nowYear);
			if (!argv.day && !argv.month && !argv.year) {
				console.log(formatDate(nowDate));
			}
		},
	})
	.parse();
