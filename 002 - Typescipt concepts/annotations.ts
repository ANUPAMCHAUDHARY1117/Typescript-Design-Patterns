const num: number | string = 5;

const str: string = 'string';

const date: Date = new Date();

const strArray: string[] = ['red', 'blue', 'green'];

const numArray: number[] = [1, 2, 3, 4, 5];

const mixedArray: (string | number)[] = [1, 2, 3, 'abc'];

const stringObj: { x: number; y: number } = {
	x: 5,
	y: 10,
};

const obj: { a: number; y: number; [x: string]: number } = {
	a: 5,
	y: 10,
	z: 5,
};

const func: (i: number) => number = (i: number) => {
	return i;
};
