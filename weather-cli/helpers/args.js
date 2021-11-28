import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const getArgs = () => {
	return yargs(hideBin(process.argv)).argv;
	// const [executer, file, ...rest] = args;
}
