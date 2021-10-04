#!/usr/bin/env node

const yargs = require("yargs/yargs");
const {
	hideBin
} = require("yargs/helpers");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const nowDate = new Date(Date.now());
const time = nowDate.toLocaleTimeString();
const date = nowDate.getDate();
const month = nowDate.getMonth();
const year = nowDate.getFullYear();
const options = {
	day: {
		alias: "d",
		describe: "Get day",
		// type: "number",
		// default: 0,
	},
	month: {
		alias: "m",
		describe: "Get month",
	},
	year: {
		alias: "y",
		describe: "Get year",
	},
};
const getNewDate = (date) => {
	return `The ${date.getDate()} of ${months[date.getMonth()]} ${date.getFullYear()}, ${date.toLocaleTimeString()}`;
};
yargs(hideBin(process.argv))
	.options(options)
	.command({
		command: "add",
		desc: "Incremet date",
		handler: (argv) => {
			argv.day == 1 && console.log(getNewDate(new Date(nowDate.setDate(date + arg))));
			argv.month == 1 && console.log(getNewDate(new Date(nowDate.setMonth(month + arg))));
			argv.year == 1 && console.log(getNewDate(new Date(nowDate.setFullYear(year + arg))));
		},
	})
	.command({
		command: "sub",
		desc: "Decremet date",
		handler: (argv) => {
			argv.day == 1 && console.log(getNewDate(new Date(nowDate.setDate(date - arg))));
			argv.month == 1 && console.log(getNewDate(new Date(nowDate.setMonth(month - arg))));
			argv.year == 1 && console.log(getNewDate(new Date(nowDate.setFullYear(year - arg))));
		},
	})
	.command({
		command: "$0",
		desc: "Show current date",
		handler: (argv) => {
			argv.day == 1 && console.log(date);
			argv.month == 1 && console.log(months[month]);
			argv.year == 1 && console.log(year);
			if (!argv.day && !argv.month && !argv.year) {
				console.log(getNewDate(nowDate));
			}
		},
	})
	.parse();

//   .command("add", "Incremet date", function (yargs) {
//     return yargs
//       .option("day", {
//         coerce: (arg) => arg && console.log(getNewDate(new Date(nowDate.setDate(date + arg)))),
//       })
//       .option("month", {
//         coerce: (arg) => arg && console.log(getNewDate(new Date(nowDate.setMonth(month + arg)))),
//       })
//       .option("year", {
//         coerce: (arg) => arg && console.log(getNewDate(new Date(nowDate.setFullYear(year + arg)))),
//       });
//   })
//   .command("sub", "Decremet date", function (yargs) {
//     return yargs
//       .option("day", {
//         coerce: (arg) => arg && console.log(getNewDate(new Date(nowDate.setDate(date - arg)))),
//       })
//       .option("month", {
//         coerce: (arg) => arg && console.log(getNewDate(new Date(nowDate.setMonth(month - arg)))),
//       })
//       .option("year", {
//         coerce: (arg) => arg && console.log(getNewDate(new Date(nowDate.setFullYear(year - arg)))),
//       });
//   })
//   .command("$0", "Show current date", function (yargs) {
//     return yargs
//       .option("day", {
//         coerce: (arg) => arg && console.log(date),
//       })
//       .option("month", {
//         coerce: (arg) => arg && console.log(month),
//       })
//       .option("year", {
//         coerce: (arg) => arg && console.log(year),
//       });
//   })
//   .parse()
