#!/usr/bin/env node

const readline = require("readline");
const input = readline.createInterface(process.stdin);

const number = Math.floor(Math.random() * (100 + 1));

console.log("Загадано число в диапазоне от 0 до 100");

input.on("line", (data) => {
	(data == number) && input.close();
	(data > number) && console.log("Меньше");
	(data < number) && console.log("Больше");
})
input.on("close", () => console.log(`Отгадано число ${number}`));
