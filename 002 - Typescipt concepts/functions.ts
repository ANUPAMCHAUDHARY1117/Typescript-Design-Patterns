const add = (a: number, b: number): number => {
	return a + b;
};

const logger = (message: string): void => {
	console.log(message);

	return null;
};

const throwError = (message: string): never => {
	throw new Error(message);
};

const throwErrorOnCondition = (message: string): string => {
	if (!message) {
		throw new Error(message);
	}

	return message;
};

const foreCast = {
	date: new Date(),
	weather: 'sunny',
};

const logWeather = (foreCast: { date: Date; weather: string }): void => {
	console.log(`Date --- ${foreCast.date}
    Weather --- ${foreCast.weather}
    `);
};

const logWeatherDestructred = ({
	date,
	weather,
}: {
	date: Date;
	weather: string;
}): void => {
	console.log(`Date --- ${date}
    Weather --- ${weather}
    `);
};
